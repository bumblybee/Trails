import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const libraries = ["places"];

const TrailLocationInput = () => {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({ lat: null, lng: null });

  useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const searchOptions = {
    location: {
      //  lat: () => trails[0].lat,
      //  lng: () => trails[0].lon,
    },
    radius: 2000,
  };

  const handleSelect = async (val) => {
    const results = await geocodeByAddress(val);
    const latLng = await getLatLng(results[0]);
    setAddress(val);
    setCoords(latLng);
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
            <input {...getInputProps({ placeholder: "Type address" })} />

            <div style={{ zIndex: 100, position: "absolute" }}>
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#fe7762" : "#fff",
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
