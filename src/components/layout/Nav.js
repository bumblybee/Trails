import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";
import { FaUser } from "react-icons/fa";
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
      {user ? (
        <sc.StyledLinksContainer>
          <sc.StyledLink to="/account">
            <FaUser title="account" />
          </sc.StyledLink>
          <Link to="/scout">
            <StyledPinkButton>Scout</StyledPinkButton>
          </Link>
        </sc.StyledLinksContainer>
      ) : (
        <sc.StyledLinksContainer>
          <sc.StyledLink to="/login">Login</sc.StyledLink>
          <sc.StyledLink to="/signup">Signup</sc.StyledLink>
          <Link to="#">
            <StyledDisabledButton title="Log in to post a trail">
              Scout
            </StyledDisabledButton>
          </Link>
        </sc.StyledLinksContainer>
      )}
    </sc.StyledNav>
  );
};

export default Nav;
