import React, { useState } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const TrailLocationInput = ({ setLocation }) => {
  const [address, setAddress] = useState("");

  const handleSelect = async (val) => {
    const results = await geocodeByAddress(val);
    const result = results[0];
    const latLng = await getLatLng(result);
    setAddress(val);

    // console.log(result);
    // console.log(latLng);
    setLocation(
      result.address_components[0].long_name,
      result.address_components[2].long_name,
      latLng.lat,
      latLng.lng
    );
  };

  //TODO: wire state to form

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({ placeholder: "Type address" })}
              required
            />

            <div
              style={{ zIndex: 100, position: "absolute", color: "#99a29e" }}
            >
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#eceeed" : "#fff",
                  cursor: "pointer",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default TrailLocationInput;
