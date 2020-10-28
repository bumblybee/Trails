import React from "react";
import { Link } from "react-router-dom";
import * as sc from "./StyledNav";
import { StyledPinkButton } from "../../styles/GlobalStyledComponents";

//TODO: If signed up, show saves and account
const Nav = () => {
  return (
    <sc.StyledNav>
      <div className="logo-container">
        <Link to="/">
          <img style={{ height: "23px" }} src="assets/logo.png" alt="" />
        </Link>
      </div>
      <sc.StyledLinksContainer>
        <sc.StyledLink to="/login">Login</sc.StyledLink>
        <sc.StyledLink to="/signup">Signup</sc.StyledLink>
        <StyledPinkButton>Scout</StyledPinkButton>
      </sc.StyledLinksContainer>
    </sc.StyledNav>
  );
};

export default Nav;
