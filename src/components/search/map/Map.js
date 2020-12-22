import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";

import MapSearchbar from "./MapSearchbar";

import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

import mapStyles from "../../../styles/mapStyles";
import * as sc from "./StyledMap";

import { SearchContext } from "../../../context/search/SearchContext";

// TODO: if user location and no trails, use that as center, else preset
// TODO: google dev setup uri for key after deploy
// TODO: Pan map and call api search when search performed by user
// TODO: Zoom map when markers displayed

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

  const [markers, setMarkers] = useState([]);
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

  //TODO: Set center to user's location, then pan to searched area
  useEffect(() => {
    if (trails.length) {
      setCenter({
        lat: trails[3].lnglat.coordinates[1],
        lng: trails[3].lnglat.coordinates[0],
      });

      setTrailMarkers();
    } else {
      setCenter({ lat: 41.0998, lng: -100.1586 });
    }
  }, [trails, setTrailMarkers]);

  return (
    <sc.StyledMapContainer>
      <sc.StyledMapLogo>
        <img src="assets/logo.png" alt="" />
      </sc.StyledMapLogo>

      <MapSearchbar />

      <GoogleMap
        onLoad={onMapLoad}
        mapContainerStyle={mapContainerStyle}
        zoom={markers.length > 0 ? 9 : 6}
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
