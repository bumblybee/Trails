import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useClickOutsideMenu } from "../../../hooks/useClickOutsideMenu";
import { ErrorContext } from "../../../context/error/ErrorContext";
import { UserContext } from "../../../context/user/UserContext";
import { SearchContext } from "../../../context/search/SearchContext";
import { BookmarkContext } from "../../../context/bookmark/BookmarkContext";

import * as sc from "./StyledNavMenu";

// Todo:  Handle setting url when click "near me"
// Todo: remove use of local storage
const NavMenu = ({ closeMenu }) => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const menuRef = useClickOutsideMenu(() => closeMenu());

  const { user, logUserOut } = useContext(UserContext);
  const { setBookmarks } = useContext(BookmarkContext);
  const { setError } = useContext(ErrorContext);
  const { searchTrails } = useContext(SearchContext);

  const handleLogout = async () => {
    await logUserOut();
    setBookmarks(null);
    closeMenu();
  };

  const setQueryParams = (address, lat, lng) => {
    query.set("city", address[0].split(" ")[1]);
    query.set("state", address[1]);
    query.set("lat", lat);
    query.set("lng", lng);
  };

  // TODO: move api call outside of component
  const reverseGeocode = async (lat, lng) => {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    );

    const data = await res.json();
    const address = data.plus_code.compound_code.split(",");

    setQueryParams(address, lat, lng);
  };

  const findTrailsNearUser = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        await reverseGeocode(lat, lng);
        await searchTrails(lat, lng);

        closeMenu();
        history.push(`/search?${query.toString()}`);
      },
      (err) => {
        setError("Enable location access to view trails near you.");
        return;
      }
    );
  };

  return (
    <sc.StyledNavMenuContainer ref={menuRef}>
      {user ? (
        <>
          <sc.StyledLink to="/account" onClick={() => closeMenu()}>
            Account
          </sc.StyledLink>
          <sc.StyledLink to="/bookmarks" onClick={() => closeMenu()}>
            Bookmarks
          </sc.StyledLink>
          <sc.StyledLink to="#" onClick={() => findTrailsNearUser()}>
            Near me
          </sc.StyledLink>
          <sc.StyledLink to="/scout" onClick={() => closeMenu()}>
            Scout trail
          </sc.StyledLink>
          <sc.StyledMenuHr />

          <sc.StyledLink to="/" onClick={() => handleLogout()}>
            Log out
          </sc.StyledLink>
        </>
      ) : (
        <>
          <sc.StyledLink to="/login" onClick={() => closeMenu()}>
            Log in
          </sc.StyledLink>

          <sc.StyledLink to="/signup" onClick={() => closeMenu()}>
            Sign up
          </sc.StyledLink>
          <sc.StyledLink to="#" onClick={() => findTrailsNearUser()}>
            Near me
          </sc.StyledLink>

          <sc.StyledMenuHr />

          <sc.StyledLink to="/about" onClick={() => closeMenu()}>
            About
          </sc.StyledLink>
        </>
      )}
    </sc.StyledNavMenuContainer>
  );
};

export default NavMenu;
