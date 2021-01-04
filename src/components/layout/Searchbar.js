import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Combobox, ComboboxPopover } from "@reach/combobox";
import { SearchContext } from "../../context/search/SearchContext";
import Filter from "./Filter";
import { StyledPinkButton } from "../../styles/GlobalStyledComponents";
import * as sc from "./StyledSearchbar";

const Searchbar = () => {
  const history = useHistory();
  const [coords, setCoords] = useLocalStorage("coords", {});
  const { searchTrails, setSearchValue } = useContext(SearchContext);

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
    setSearchValue(address);
    clearSuggestions();

    try {
      //get geo of address user passes in
      const results = await getGeocode({ address });

      // grab lat and lng from first result
      console.log(results);
      const { lat, lng } = await getLatLng(results[0]);
      //set local storage coords
      setCoords({ lat, lng });
      //call api
      await searchTrails(lat, lng);
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
          <StyledPinkButton
            onClick={() => {
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
