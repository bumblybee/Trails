import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavMenu from "./NavMenu";
import * as sc from "./StyledNav";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuButtonRef = useRef();

  const closeMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <sc.StyledNav>
      <div className="logo-container">
        <Link to="/">
          <sc.StyledLogo src="assets/logo.png" alt="" />
        </Link>
      </div>

      {showMenu ? <NavMenu closeMenu={closeMenu} /> : ""}

      <sc.StyledLinksContainer>
        <FaBars
          title="account"
          ref={menuButtonRef}
          onClick={() => setShowMenu(!showMenu)}
        />
      </sc.StyledLinksContainer>
    </sc.StyledNav>
  );
};

export default Nav;
