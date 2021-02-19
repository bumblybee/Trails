import React from "react";
import { HashLink } from "react-router-hash-link";
import he from "he";
import { useLocation } from "react-router-dom";
import { InfoWindow } from "@react-google-maps/api";
import StarRating from "../../../../../components/rating/StarRating";
import * as sc from "./StyledMapMarkerPopup";

// TODO: Position infowindow above searchbar

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
        position={{ lat: selected.lat + 0.04, lng: selected.lng - 0.02 }}
        setZIndex={2000}
        onCloseClick={() => setSelected(null)}
      >
        <sc.StyledMapMarkerPopup>
          <h3>{he.decode(selected.name)}</h3>
          <p>
            {selected.city}, {selected.state}
          </p>
          <StarRating rating={selected.rating} />
          <sc.StyledImageContainer>
            <img src={selected.img} alt="trail" />
          </sc.StyledImageContainer>
        </sc.StyledMapMarkerPopup>
      </InfoWindow>
    </HashLink>
  );
};

export default MapMarkerPopup;
