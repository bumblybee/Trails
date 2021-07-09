import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { ComboboxPopover } from "@reach/combobox";
import { SearchContext } from "../../../context/search/SearchContext";
import Filter from "../search_filter/Filter";
import * as sc from "./StyledMapSearchbar";

const MapSearchbar = () => {
  const history = useHistory();
  const { trails, searchTrails, setSearchLocation } = useContext(SearchContext);
  const [searchFilterValue, setSearchFilterValue] = useState(null);

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

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      //get geo of address user passes in
      const results = await getGeocode({ address });

      // grab lat and lng from first result
      const { lat, lng } = await getLatLng(results[0]);

      //store address in context
      const city = address.split(",")[0];
      const state = address.split(", ")[1];

      setSearchLocation({ coords: { lat: lat, lng: lng }, city, state });
      //call api
      await searchTrails(lat, lng, searchFilterValue);
      // Clear input
      setValue("");

      history.push(`/search?city=${city}&state=${state}&lat=${lat}&lng=${lng}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <sc.StyledMapSearchbar className="map-searchbar">
      <sc.StyledComboBox onSelect={handleSelect}>
        <sc.StyledComboInput
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder={
            window.innerWidth < 620 ? "Search..." : "Search a location..."
          }
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
      </sc.StyledComboBox>
      <Filter origin={"map"} setSearchFilterValue={setSearchFilterValue} />
    </sc.StyledMapSearchbar>
  );
};

export default MapSearchbar;
