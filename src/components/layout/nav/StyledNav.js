import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: 100%;
  box-shadow: ${(props) =>
    props.currentPath === "/" ||
    props.currentPath === "/login" ||
    props.currentPath === "/signup"
      ? ""
      : "0 1px 6px rgba(0, 0, 0, 0.1)"};
  background: ${(props) =>
    props.currentPath === "/" ||
    props.currentPath === "/login" ||
    props.currentPath === "/signup"
      ? "transparent"
      : "#fffeff"};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 620px) {
    padding: 0.5rem;
  }
`;

export const StyledLogoContainer = styled.div`
  padding: 0 0.4rem 0;
`;

export const StyledLogo = styled.img`
  height: ${(props) => (props.currentPath === "/" ? "42px" : "37px")};
  background: transparent;

  @media (max-width: 620px) {
    height: ${(props) => (props.currentPath === "/" ? "30px" : "27px")};
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.2rem;
  transition: border-color 0.2s ease-in-out 0s;

  svg {
    font-size: 2.2rem;

    color: ${(props) => (props.showMenu ? "#fe9787" : "#fe7762")};
    border: ${(props) =>
      props.showMenu ? "2px solid #fe9787" : "2px solid #fe7762"};
    border-radius: 6px;

    padding: 0.45rem;

    :hover {
      cursor: pointer;
      color: #fe9787;
      border-color: #fe9787;
    }

    @media (max-width: 620px) {
      /* font-size: 1.8rem; */
      border: none;
    }
  }

  @media (max-width: 620px) {
    margin-right: 0;
  }
`;
