import styled from "styled-components";
import Dropdown from "react-dropdown";

export const StyledFilter = styled(Dropdown)`
  width: 90px;
  color: #99a29e;
  /* border: 0.5px solid #eceeed; */

  padding: 0.2rem;
  font-size: 0.9rem;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;

    /* border: 1px solid transparent; */
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
    margin-top: 2.3rem;
  }

  option {
    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 620px) {
    width: 80px;
  }
`;
