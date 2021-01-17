import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";
import * as sc from "./StyledNav";
import {
  StyledDisabledButton,
  StyledPinkButton,
} from "../../styles/GlobalStyledComponents";

//TODO: If signed up, show saves and account
//TODO: Scout button takes you to login/signup if not logged in
const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <sc.StyledNav>
      <div className="logo-container">
        <Link to="/">
          <sc.StyledLogo src="assets/logo.png" alt="" />
        </Link>
      </div>
      <sc.StyledLinksContainer>
        <sc.StyledLink to="/login">Login</sc.StyledLink>
        <sc.StyledLink to="/signup">Signup</sc.StyledLink>
        <Link to={user ? "/scout" : "#"}>
          {user ? (
            <StyledPinkButton>Scout</StyledPinkButton>
          ) : (
            <StyledDisabledButton title="Log in to post a trail">
              Scout
            </StyledDisabledButton>
          )}
        </Link>
      </sc.StyledLinksContainer>
    </sc.StyledNav>
  );
};

export default Nav;
