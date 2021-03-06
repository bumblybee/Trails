import styled from "styled-components";
import Dropdown from "react-dropdown";

export const StyledFilter = styled(Dropdown)`
  width: 90px;
  color: #99a29e;
  background: transparent;
  padding: 0.2rem;
  font-size: 0.9rem;

  @media (max-width: 620px) {
    padding: 0;
    font-size: 0.85rem;
    width: 75px;
    margin-right: 0.5rem;
  }

  .Dropdown-arrow {
    right: 8px;
  }
  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }

  .Dropdown-control {
    border: none;
    :hover {
      cursor: pointer;
      border: none;
      box-shadow: none;
    }
  }

  .Dropdown-menu {
    border: 1px solid #eceeed;
    border: none;
    border-radius: 6px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    margin-top: ${(props) =>
      props.origin === "landing" ? "2.3rem" : "0.95rem"};

    @media (max-width: 620px) {
      margin-top: ${(props) =>
        props.origin === "landing" ? "1.5rem" : "0.7rem"};
    }
  }

  option {
    :hover {
      cursor: pointer;
    }
  }
`;
