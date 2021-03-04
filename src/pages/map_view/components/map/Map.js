import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";

import { useLocation, useHistory } from "react-router-dom";
import { GoogleMap } from "@react-google-maps/api";
import { geocode } from "../../../../api/geocodeApi";
import { SearchContext } from "../../../../context/search/SearchContext";
import { FaCheck } from "react-icons/fa";

import MapMarker from "./map_marker/MapMarker";
import MapMarkerPopup from "./map_marker/MapMarkerPopup";
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
  const [searchOnMove, setSearchOnMove] = useState(true);

  const reverseGeocode = async (mapCenter) => {
    const geocodeData = await geocode(mapCenter.lat, mapCenter.lng);
    return geocodeData;
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
          city: trail.city,
          state: trail.state,
          rating: trail.rating,
          img:
            trail.image !== null
              ? trail.image
              : "https://images.unsplash.com/photo-1564417510515-b3d20c821653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
      ]);
    });
  }, [trails]);

  const setQueryParamsOnDrag = async (mapCenter) => {
    const geocodeData = await reverseGeocode(mapCenter);
    console.log(geocodeData);

    const address =
      geocodeData.plus_code.compound_code &&
      geocodeData.plus_code.compound_code.slice(7).split(",");
    console.log(address);

    queryParams.set("city", address[0].trim());
    queryParams.set("state", address[1].trim());
    queryParams.set("lat", mapCenter.lat);
    queryParams.set("lng", mapCenter.lng);
  };

  // When user stops dragging map, get center and call api with updated lat and lng, set markers
  // TODO: Handle poor UX where everything re-renders
  const handleMapDrag = async () => {
    const mapCenter = mapRef.current && mapRef.current.getCenter().toJSON();
    await setQueryParamsOnDrag(mapCenter);
    history.push(`${location.pathname}?${queryParams.toString()}`);

    if (searchOnMove) {
      await searchTrails(mapCenter.lat, mapCenter.lng);
    }
  };

  const getTrails = async () => {
    if (!trails.length) {
      await searchTrails(coords.lat, coords.lng);
    }
  };

  useEffect(() => {
    // If window reloads or user coming from another page, search trails again using params so map, markers, and cards populate

    console.log("in map");
    getTrails();
    setTrailMarkers();
  }, [setTrailMarkers]);

  return (
    <sc.StyledMapContainer>
      <sc.StyledMapLogo>
        <img src="assets/logo.png" alt="" />
      </sc.StyledMapLogo>

      <sc.StyledSearchOnDragCheckbox>
        <label htmlFor="">
          {searchOnMove ? (
            <FaCheck
              className="faCheck"
              onClick={() => setSearchOnMove(!searchOnMove)}
            />
          ) : (
            ""
          )}
          <input
            type="checkbox"
            checked={searchOnMove}
            onChange={() => setSearchOnMove(!searchOnMove)}
          />{" "}
          Search on map move
        </label>
      </sc.StyledSearchOnDragCheckbox>
      <MapSearchbar />
      <GoogleMap
        onClick={() => setSelected(null)}
        onLoad={onMapLoad}
        mapContainerStyle={mapContainerStyle}
        zoom={markers.length > 0 ? 8 : 6}
        center={coords}
        onDragEnd={handleMapDrag}
        options={options}
      >
        {/* ---Markers--- */}

        {markers.map((marker, index) => (
          <MapMarker
            key={index}
            marker={marker}
            hoveredCard={hoveredCard}
            setSelected={setSelected}
          />
        ))}

        {/* ---Marker Card--- */}

        {selected ? (
          <MapMarkerPopup
            selected={selected}
            setSelected={setSelected}
          ></MapMarkerPopup>
        ) : null}
      </GoogleMap>
    </sc.StyledMapContainer>
  );
};

export default Map;
