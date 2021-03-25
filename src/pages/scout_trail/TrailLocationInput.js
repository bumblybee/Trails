import React, { useState } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import * as sc from "./StyledLocation";

const TrailLocationInput = ({ setLocation, trail }) => {
  const [address, setAddress] = useState(
    trail && trail.city ? `${trail.city}, ${trail.state}` : ""
  );

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
              {...getInputProps({ placeholder: "Start typing address..." })}
              required
            />
            {suggestions.length > 0 && (
              <sc.StyledLocationDropDown>
                {suggestions.map((suggestion) => {
                  return (
                    <sc.StyledLocationSuggestion
                      suggestion={suggestion}
                      key={suggestion.index}
                      {...getSuggestionItemProps(suggestion)}
                    >
                      {suggestion.description}
                    </sc.StyledLocationSuggestion>
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
