import React, { useContext } from "react";

import { useClickOutsideMenu } from "../../hooks/useClickOutsideMenu";
import { UserContext } from "../../context/user/UserContext";
import { logoutUser } from "../../api/userApi";
import * as sc from "./StyledNavMenu";

const NavMenu = ({ closeMenu }) => {
  const { user, setUser } = useContext(UserContext);
  const menuRef = useClickOutsideMenu(() => closeMenu());

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    closeMenu();
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
