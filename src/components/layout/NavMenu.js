import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";
import { StyledHr } from "../../styles/GlobalStyledComponents";
import * as sc from "./StyledNavMenu";

const NavMenu = ({ closeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <sc.StyledNavMenuContainer>
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

          <sc.StyledLink to="/logout" onClick={() => closeMenu()}>
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
