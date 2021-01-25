import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";

import { useLocalStorage } from "../../../hooks/useLocalStorage";

import MapSearchbar from "./MapSearchbar";

import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

import mapStyles from "../../../styles/mapStyles";
import * as sc from "./StyledMap";

import { SearchContext } from "../../../context/search/SearchContext";

// TODO: google dev - setup uri for key after deploy
// TODO: Pan map and call api search when user moves map

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Map = ({ hovered }) => {
  const { trails, searchTrails } = useContext(SearchContext);

  const [markers, setMarkers] = useState([]);
  const [coords] = useLocalStorage("coords");
  const [center, setCenter] = useState({});

  const [selected, setSelected] = useState(null);

  const mapRef = useRef();
  const onMapLoad = useCallback(async (map) => {
    mapRef.current = map;
  }, []);

  const setTrailMarkers = useCallback(() => {
    trails.forEach((trail) => {
      setMarkers((current) => [
        ...current,
        {
          id: trail.id,
          lat: Number(trail.lnglat.coordinates[1]),
          lng: Number(trail.lnglat.coordinates[0]),
          name: trail.name,
          img:
            trail.image !== null
              ? trail.image
              : "https://images.unsplash.com/photo-1564417510515-b3d20c821653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
      ]);
    });
  }, [trails]);

  // When user stops dragging map, get center and call api with updated lat and lng, set markers
  // TODO: Handle poor UX when everything re-renders
  const handleMapDrag = () => {
    const mapCenter = mapRef.current && mapRef.current.getCenter().toJSON();

    setCenter(mapCenter);
    searchTrails(mapCenter.lat, mapCenter.lng);
    setTrailMarkers();
  };

  useEffect(() => {
    // If window reloads or user coming from another page, search trails again using local storage coords so map, markers, and cards populate
    const getTrails = async () => {
      if (!trails.length) await searchTrails(coords.lat, coords.lng);
    };

    getTrails();
    setTrailMarkers();
  }, [setTrailMarkers]);

  return (
    <sc.StyledMapContainer>
      <sc.StyledMapLogo>
        <img src="assets/logo.png" alt="" />
      </sc.StyledMapLogo>

      <MapSearchbar />

      <GoogleMap
        onLoad={onMapLoad}
        mapContainerStyle={mapContainerStyle}
        zoom={markers.length > 0 ? 8.1 : 6}
        center={coords}
        onDragEnd={handleMapDrag}
        options={options}
      >
        {/* ---Markers--- */}

        {markers.map((marker, index) => (
          <Marker
            onClick={() => setSelected(marker)}
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url:
                hovered === marker.id
                  ? "/assets/hoveredMarker.svg"
                  : "/assets/marker.svg",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(18, 18),
            }}
          />
        ))}

        {/* ---Marker Card--- */}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h1 style={{ marginBottom: "0" }}>{selected.name}</h1>
              <p>Replace me with a card that has trail details</p>
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
