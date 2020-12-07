import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Combobox, ComboboxPopover } from "@reach/combobox";
import { SearchContext } from "../../context/search/SearchContext";
import Filter from "./Filter";
import { StyledPinkButton } from "../../styles/GlobalStyledComponents";
import * as sc from "./StyledSearchbar";

const libraries = ["places"];

//TODO: reconfig autocomplete because not always accurate
const Searchbar = () => {
  //load Places script to use in searchbar
  useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const history = useHistory();
  const [address, setAddress] = useState("");
  const { searchTrails, trails, searchValue, setSearchValue } = useContext(
    SearchContext
  );

  //TODO: get user location
  //if no trails, don't give suggestions - maybe get user location and use that
  const requestOptions = trails.length
    ? {
        location: {
          lat: () => trails[0].lat,
          lng: () => trails[0].lon,
        },
        radius: 200 * 1000,
      }
    : "";

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
    <sc.StyledSearchbarContainer>
      <sc.StyledSearchbar>
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
              console.log(results);
              const { lat, lng } = await getLatLng(results[0]);
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
              setAddress(e.target.value);
            }}
            type="text"
            placeholder="Search a location..."
            value={value}
            disabled={!ready}
          ></sc.StyledComboInput>

          <ComboboxPopover style={{ zIndex: "5" }}>
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

        <sc.StyledButtonContainer>
          <Filter />
          <StyledPinkButton
            onClick={async () => {
              const results = await getGeocode({ address });
              // grab lat and lng from first result
              console.log(results);
              const { lat, lng } = await getLatLng(results[0]);
              //call api
              await searchTrails(lat, lng);
              history.push("/search");
            }}
          >
            Search
          </StyledPinkButton>
        </sc.StyledButtonContainer>
      </sc.StyledSearchbar>
    </sc.StyledSearchbarContainer>
  );
};

export default Searchbar;
