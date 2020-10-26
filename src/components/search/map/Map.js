import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";

import MapSearchbar from "./MapSearchbar";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "../../../styles/mapStyles";
import * as sc from "./StyledMap";

import { SearchContext } from "../../../context/search/SearchContext";

//TODO: if user location, use that as center, else preset
//TODO: google dev setup uri for key after deploy

const libraries = ["places"];

//TODO: change center to user's location

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Map = () => {
  const { trails } = useContext(SearchContext);
  //   const [campgrounds, setCampgrounds] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({});
  const [selected, setSelected] = useState(null);

  const setTrailMarkers = useCallback(() => {
    trails.forEach((trail) => {
      setMarkers((current) => [
        ...current,
        {
          lat: parseInt(trail.lat),
          lng: parseInt(trail.lon),
          name: trail.name,
          img:
            trail.thumbnail !== null
              ? trail.thumbnail
              : "https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
      ]);
    });
  }, [trails]);

  useEffect(() => {
    if (trails.length > 0) {
      setCenter({
        lat: parseInt(trails[0].lat),
        lng: parseInt(trails[0].lon),
      });

      setTrailMarkers();
      console.log(trails);
    }
  }, [trails, setTrailMarkers]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback(async (map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading map";

  return (
    <sc.StyledMapContainer>
      <sc.StyledMapLogo>
        <img src="logo.png" alt="" />
      </sc.StyledMapLogo>

      <MapSearchbar />

      <GoogleMap
        onLoad={onMapLoad}
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={center}
        options={options}
      >
        {markers.map((marker, index) => (
          <Marker
            onClick={() => setSelected(marker)}
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/assets/marker.svg",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h1 style={{ marginBottom: "0" }}>{selected.name}</h1>
              <p>Replace me with a card that has park details</p>
              <img
                style={{
                  width: "200px",
                  height: "150px",
                  display: "block",
                  margin: "0 auto",
                }}
                src={selected.img}
                alt=""
              />
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </sc.StyledMapContainer>
  );
};

export default Map;
