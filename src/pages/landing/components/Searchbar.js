import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Combobox } from "@reach/combobox";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { SearchContext } from "../../../context/search/SearchContext";
import Filter from "../../../components/layout/search_filter/Filter";
import { FaSearch } from "react-icons/fa";
import { StyledSearchButton } from "../../../styles/GlobalStyledComponents";
import * as sc from "./StyledSearchbar";

const Searchbar = () => {
  const history = useHistory();
  const [coords, setCoords] = useLocalStorage("coords", {});
  const [locationSearch, setLocationSearch] = useLocalStorage(
    "location_search",
    ""
  );
  const { searchTrails, searchLocation, setSearchLocation } = useContext(
    SearchContext
  );

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    //store search value in context to use in map
    clearSuggestions();
    console.log(address);

    try {
      //get geo of address user passes in
      const results = await getGeocode({ address });
      // grab lat and lng from first result
      const { lat, lng } = await getLatLng(results[0]);

      const city = address.split(",")[0];
      const state = address.split(", ")[1];
      setSearchLocation({ coords: { lat: lat, lng: lng }, city, state });

      //set local storage coords
      setCoords({ lat, lng });
      //call api
      await searchTrails(lat, lng, city, state);
    } catch (err) {
      console.log(err);
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
          <Filter />
          <StyledSearchButton
            onClick={() => {
              history.push(
                `/search?city=${searchLocation.city}&state=${searchLocation.state}&lat=${searchLocation.coords.lat}&lng=${searchLocation.coords.lng}`
              );
            }}
          >
            <FaSearch />
          </StyledSearchButton>
        </sc.StyledButtonContainer>
      </sc.StyledSearchbar>
    </sc.StyledSearchbarContainer>
  );
};

export default Searchbar;
