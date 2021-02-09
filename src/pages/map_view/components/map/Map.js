import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";

import { useLocation, useHistory } from "react-router-dom";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

import { SearchContext } from "../../../../context/search/SearchContext";

import mapStyles from "../../../../styles/mapStyles";
import MapSearchbar from "./MapSearchbar";
import * as sc from "./StyledMap";

// TODO: google dev - setup uri for key after deploy

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Map = ({ hoveredCard }) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const coords = {
    lat: Number(queryParams.get("lat")),
    lng: Number(queryParams.get("lng")),
  };

  const { trails, searchTrails } = useContext(SearchContext);

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const reverseGeocode = async (mapCenter) => {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${mapCenter.lat},${mapCenter.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    );

    const data = await res.json();
    return data;
  };

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

  const setQueryParamsOnDrag = async (mapCenter) => {
    const data = await reverseGeocode(mapCenter);

    const address = data.plus_code.compound_code.split(",");
    console.log(address);
    queryParams.set("city", address[0].split(" ")[1]);
    queryParams.set("state", address[1]);
    queryParams.set("lat", mapCenter.lat);
    queryParams.set("lng", mapCenter.lng);
  };

  // When user stops dragging map, get center and call api with updated lat and lng, set markers
  // TODO: Handle poor UX where everything re-renders
  const handleMapDrag = async () => {
    const mapCenter = mapRef.current && mapRef.current.getCenter().toJSON();

    await searchTrails(mapCenter.lat, mapCenter.lng);
    await setQueryParamsOnDrag(mapCenter);
    history.push(`${location.pathname}?${queryParams.toString()}`);
  };

  useEffect(() => {
    // If window reloads or user coming from another page, search trails again using local storage coords so map, markers, and cards populate
    const getTrails = async () => {
      if (!trails.length) {
        await searchTrails(coords.lat, coords.lng);
      }
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
        zoom={markers.length > 0 ? 8 : 6}
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
                hoveredCard === marker.id
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
