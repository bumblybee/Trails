import React, { useState } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import * as sc from "./StyledLocation";

const TrailLocationInput = ({ setLocation }) => {
  const [address, setAddress] = useState("");

  // Grab city and state from returned geocode result
  const getCityAndState = (result) => {
    let city, state;
    result.address_components.forEach((component) => {
      if (component.types.includes("locality")) {
        city = component.long_name;
      }
      if (component.types.includes("administrative_area_level_1")) {
        state = component.long_name;
      }
    });
    return { city, state };
  };

  // handle places autocomplete suggestion selection
  const handleSelect = async (val) => {
    const results = await geocodeByAddress(val);
    const result = results[0];
    const latLng = await getLatLng(result);
    setAddress(val);

    const { city, state } = getCityAndState(result);
    setLocation(city, state, latLng.lat, latLng.lng);
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <sc.StyledLocationInput
              {...getInputProps({ placeholder: "Type address..." })}
              required
            />
            {suggestions.length > 0 && (
              <sc.StyledLocationDropDown>
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#eceeed" : "#fff",
                    cursor: "pointer",
                  };

                  return (
                    <div
                      key={suggestion.index}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </sc.StyledLocationDropDown>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default TrailLocationInput;
