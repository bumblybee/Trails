import React, { useContext } from "react";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Combobox, ComboboxPopover } from "@reach/combobox";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { SearchContext } from "../../../context/search/SearchContext";
import Filter from "../../layout/Filter";
import * as sc from "./StyledMap";

const MapSearchbar = () => {
  const { trails, searchTrails, searchValue, setSearchValue } = useContext(
    SearchContext
  );
  const [coords, setCoords] = useLocalStorage("coords", {});

  // usePlacesAutoComplete options
  const requestOptions = trails.length && {
    location: {
      lat: () => trails[0].lat,
      lng: () => trails[0].lon,
    },
    radius: 200 * 1000,
  };

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions,
  });

  return (
    <sc.StyledMapSearchbar className="map-searchbar">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          //store address in context
          setSearchValue(address);
          clearSuggestions();
          try {
            //get geo of address user passes in
            const results = await getGeocode({ address });
            // grab lat and lng from first result
            const { lat, lng } = await getLatLng(results[0]);
            setCoords({ lat, lng });
            //call api
            await searchTrails(lat, lng);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <sc.StyledComboInput
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="Search a location..."
          value={value}
          disabled={!ready}
        ></sc.StyledComboInput>

        <ComboboxPopover>
          <sc.StyledComboList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <sc.StyledComboboxOption
                  key={id}
                  value={description}
                ></sc.StyledComboboxOption>
              ))}
          </sc.StyledComboList>
        </ComboboxPopover>
      </Combobox>
      <Filter />
    </sc.StyledMapSearchbar>
  );
};

export default MapSearchbar;
