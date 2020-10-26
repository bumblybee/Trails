import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
import { StyledPinkButton } from "../../styles/GlobalStyledComponents";
import * as sc from "./StyledSearchbar";

const GeoSearch = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    history.push("/search");
  };

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {},
  });

  return (
    <sc.StyledSearchbarContainer>
      <sc.StyledSearchbar>
        <sc.StyledSearchForm onSubmit={handleSearch}>
          <div>
            <Combobox
              onSelect={async (address) => {
                try {
                  const results = await getGeocode({ address });
                  const { lat, lng } = await getLatLng(results[0]);
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
                <ComboboxList>
                  {status === "OK" &&
                    data.map(({ id, description }) => {
                      <ComboboxOption
                        key={id}
                        value={description}
                      ></ComboboxOption>;
                    })}
                </ComboboxList>
              </ComboboxPopover>
            </Combobox>
          </div>
          <div className="search-button">
            <StyledPinkButton type="submit">Search</StyledPinkButton>
          </div>
        </sc.StyledSearchForm>
      </sc.StyledSearchbar>
    </sc.StyledSearchbarContainer>
  );
};

export default GeoSearch;
