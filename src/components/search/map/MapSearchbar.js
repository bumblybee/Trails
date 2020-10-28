import React, { useState, useContext } from "react";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { SearchContext } from "../../../context/search/SearchContext";
import * as sc from "./StyledMap";

const MapSearchbar = () => {
  const [searchText, setSearchText] = useState("");

  const { trails } = useContext(SearchContext);
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {
      location: {
        lat: () => trails[0].lat,
        lng: () => trails[0].lon,
      },
      radius: 200 * 1000,
    },
  });

  return (
    <sc.StyledMapSearchbar>
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            //get geo of address user passes in
            const results = await getGeocode({ address });
            // grab lat and lng from first result
            console.log(results);
            const { lat, lng } = await getLatLng(results[0]);
            console.log(lat, lng);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <i class="fas fa-search"></i>

        <sc.StyledComboInput
          onChange={(e) => {
            setValue(e.target.value);
            setSearchText(e.target.value);
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
    </sc.StyledMapSearchbar>

    // <sc.StyledMapSearchbar>
    //   <div>
    //     <i class="fas fa-search"></i>
    //     <sc.StyledSearchInput
    //       onChange={(e) => setSearchText(e.target.value)}
    //       type="text"
    //       placeholder="Search a location..."
    //       value={searchText}
    //     ></sc.StyledSearchInput>
    //   </div>
    // </sc.StyledMapSearchbar>
  );
};

export default MapSearchbar;
