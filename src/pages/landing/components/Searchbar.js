import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Combobox } from "@reach/combobox";
import { ErrorContext } from "../../../context/error/ErrorContext";
import { SearchContext } from "../../../context/search/SearchContext";
import Filter from "../../../components/layout/search_filter/Filter";
import { FaSearch } from "react-icons/fa";

import * as sc from "./StyledSearchbar";

const Searchbar = () => {
  const history = useHistory();
  const { setError } = useContext(ErrorContext);
  const { searchTrails } = useContext(SearchContext);
  const [searchLocation, setSearchLocation] = useState(null);
  const [searchFilterValue, setSearchFilterValue] = useState(null);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      //get geo of address user passes in
      const results = await getGeocode({ address });
      // grab lat and lng from first result
      const { lat, lng } = await getLatLng(results[0]);

      const city = address.split(",")[0];
      const state = address.split(", ")[1];

      setSearchLocation({ coords: { lat: lat, lng: lng }, city, state });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    await searchTrails(
      searchLocation.coords.lat,
      searchLocation.coords.lng,
      searchFilterValue
    );

    searchLocation
      ? history.push(
          `/search?city=${searchLocation.city}&state=${searchLocation.state}&lat=${searchLocation.coords.lat}&lng=${searchLocation.coords.lng}`
        )
      : setError("Please enter search a location.");
  };

  const handleKeyDown = async (e) => {
    if (e.keyCode === 13 && searchLocation) {
      await handleSearch();
    }
  };

  return (
    <sc.StyledSearchbarContainer>
      <sc.StyledSearchbar>
        <Combobox onSelect={handleSelect}>
          <sc.StyledComboInput
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Search a location..."
            value={value}
            disabled={!ready}
          ></sc.StyledComboInput>

          <sc.StyledComboPopover>
            <sc.StyledComboList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <sc.StyledComboboxOption
                    key={id}
                    value={description}
                  ></sc.StyledComboboxOption>
                ))}
            </sc.StyledComboList>
          </sc.StyledComboPopover>
        </Combobox>

        <sc.StyledButtonContainer>
          <Filter
            origin={"landing"}
            setSearchFilterValue={setSearchFilterValue}
          />
          <sc.StyledSearchButton onClick={handleSearch}aria-label="search">
            <FaSearch />
          </sc.StyledSearchButton>
        </sc.StyledButtonContainer>
      </sc.StyledSearchbar>
    </sc.StyledSearchbarContainer>
  );
};

export default Searchbar;
