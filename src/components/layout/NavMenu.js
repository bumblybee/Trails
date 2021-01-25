import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useClickOutsideMenu } from "../../hooks/useClickOutsideMenu";
import { ErrorContext } from "../../context/error/ErrorContext";
import { UserContext } from "../../context/user/UserContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { logoutUser } from "../../api/userApi";
import * as sc from "./StyledNavMenu";

const NavMenu = ({ closeMenu }) => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
  const [coords, setCoords] = useLocalStorage("coords", {});
  const menuRef = useClickOutsideMenu(() => closeMenu());

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    closeMenu();
  };

  const findTrailsNearUser = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        closeMenu();
        history.push("/search");
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
            Saves
          </sc.StyledLink>
          <sc.StyledLink to="#" onClick={() => findTrailsNearUser()}>
            Near me
          </sc.StyledLink>
          <sc.StyledLink to="/scout" onClick={() => closeMenu()}>
            Scout trail
          </sc.StyledLink>
          <sc.StyledMenuHr />

          <sc.StyledLink to="/logout" onClick={() => handleLogout()}>
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
