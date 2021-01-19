import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";
import * as sc from "./StyledNavMenu";

const NavMenu = () => {
  const { user } = useContext(UserContext);

  return (
    <sc.StyledNavMenuContainer>
      {user ? (
        <>
          <Link to="/account">Account</Link>
          <Link to="/bookmarks">Saves</Link>
          <Link to="/scout">Scout trail</Link>
          <hr />
          <Link to="/logout">Log out</Link>
        </>
      ) : (
        <>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
          <hr />
          <Link to="/about">About</Link>
        </>
      )}
    </sc.StyledNavMenuContainer>
  );
};

export default NavMenu;
