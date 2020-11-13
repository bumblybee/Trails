import styled from "styled-components";

export const StyledFilter = styled.select`
  width: 100px;
  color: #99a29e;
  border: 0.5px solid #eceeed;
  padding: 0.2rem;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;

    border: 1px solid transparent;

    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.07);
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
