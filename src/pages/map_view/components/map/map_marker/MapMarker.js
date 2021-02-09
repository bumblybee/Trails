import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";

const MapMarker = ({ marker, hoveredCard, setSelected }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Marker
      onMouseOver={() => setHovered(!hovered)}
      onMouseOut={() => setHovered(!hovered)}
      className="map-marker"
      onClick={() => setSelected(marker)}
      position={{ lat: marker.lat, lng: marker.lng }}
      icon={{
        url:
          hoveredCard === marker.id || hovered
            ? "/assets/hoveredMarker.svg"
            : "/assets/marker.svg",
        scaledSize: new window.google.maps.Size(30, 30),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(18, 18),
      }}
    />
  );
};

export default MapMarker;
