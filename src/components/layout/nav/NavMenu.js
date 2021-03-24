import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { geocode } from "../../../api/geocodeApi";
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

  const { user, getCurrentUser, logUserOut } = useContext(UserContext);
  const { setBookmarks } = useContext(BookmarkContext);
  const { setError } = useContext(ErrorContext);
  const { searchTrails } = useContext(SearchContext);

  const handleLogout = async () => {
    await logUserOut();
    setBookmarks(null);
    closeMenu();
  };

  const findTrailsNearUser = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const address = await reverseGeocode(lat, lng);

        setQueryParams(address, lat, lng);

        await searchTrails(lat, lng);

        closeMenu();
        // Could pass state containing lat, lng, address rather than resetting url
        history.push(`/search?${query.toString()}`);
      },
      (err) => {
        setError("Enable location access to view trails near you.");
        return;
      }
    );
  };

  const reverseGeocode = async (lat, lng) => {
    const geocodeData = await geocode(lat, lng);
    const address =
      geocodeData.plus_code.compound_code &&
      geocodeData.plus_code.compound_code.slice(7).split(",");

    return address;
  };

  const setQueryParams = (address, lat, lng) => {
    query.set("city", address[0].trim());
    query.set("state", address[1].trim());
    query.set("lat", lat);
    query.set("lng", lng);
  };

  useEffect(() => getCurrentUser(), []);

  return (
    <sc.StyledNavMenuContainer ref={menuRef}>
      {user ? (
        <>
          <sc.StyledLink to="/bookmarks" onClick={() => closeMenu()}>
            Bookmarks
          </sc.StyledLink>
          <sc.StyledLink to="/scouted-trails" onClick={() => closeMenu()}>
            Scouted trails
          </sc.StyledLink>
          <sc.StyledMenuHr />

          <sc.StyledLink to="#" onClick={() => findTrailsNearUser()}>
            Near me
          </sc.StyledLink>
          <sc.StyledLink to="/scout" onClick={() => closeMenu()}>
            Create new trail
          </sc.StyledLink>
          <sc.StyledMenuHr />

          <sc.StyledLink to="/" onClick={() => handleLogout()}>
            Log out
          </sc.StyledLink>
        </>
      ) : (
        <>
          <sc.StyledLink to="/signup" onClick={() => closeMenu()}>
            Sign up
          </sc.StyledLink>
          <sc.StyledLink to="/login" onClick={() => closeMenu()}>
            Log in
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
