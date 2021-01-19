import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavMenu from "./NavMenu";
import * as sc from "./StyledNav";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <sc.StyledNav>
      <div className="logo-container">
        <Link to="/">
          <sc.StyledLogo src="assets/logo.png" alt="" />
        </Link>
      </div>
      <NavMenu />
      <sc.StyledLinksContainer>
        <Link to="/account">
          <FaBars title="account" />
        </Link>
      </sc.StyledLinksContainer>
    </sc.StyledNav>
  );
};

export default Nav;
