import React from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import StarRating from "../../../../../components/rating/StarRating";
import * as sc from "./StyledMapMarkerPopup";

const MapMarkerPopup = ({ selected, setSelected }) => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  return (
    <HashLink
      to={`?city=${queryParams.get("city")}&state=${queryParams.get(
        "state"
      )}&lat=${queryParams.get("lat")}&lng=${queryParams.get("lng")}#${
        selected.id
      }`}
      scroll={(el) =>
        el.scrollIntoView({ behavior: "instant", block: "center" })
      }
    >
      <InfoWindow
        position={{ lat: selected.lat, lng: selected.lng }}
        zIndex={2000}
        onCloseClick={() => setSelected(null)}
      >
        <sc.StyledMapMarkerPopup>
          <h3>{selected.name}</h3>
          <p>
            {selected.city}, {selected.state}
          </p>
          <StarRating rating={selected.rating} />
          <sc.StyledImageContainer>
            <img src={selected.img} alt="trail image" />
          </sc.StyledImageContainer>
        </sc.StyledMapMarkerPopup>
      </InfoWindow>
    </HashLink>
  );
};

export default MapMarkerPopup;
