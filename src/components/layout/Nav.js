import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavMenu from "./NavMenu";
import * as sc from "./StyledNav";

const Nav = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  });

  return (
    <sc.StyledNav currentPath={currentPath}>
      <Link to="/">
        <sc.StyledLogoContainer>
          <sc.StyledLogo src="/assets/logo.png" alt="" />
        </sc.StyledLogoContainer>
      </Link>

      {showMenu ? <NavMenu closeMenu={closeMenu} /> : ""}

      <sc.StyledLinksContainer currentPath={currentPath}>
        <FaBars title="account" onClick={() => setShowMenu(!showMenu)} />
      </sc.StyledLinksContainer>
    </sc.StyledNav>
  );
};

export default Nav;
