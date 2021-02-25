import styled from "styled-components";

export const StyledSuggestedEditsContainer = styled.div`
  position: absolute;
  top: 46.3%;
  left: 18%;
  transform: translate(-50%, -46%);
  z-index: 100;
  background: #fff;
  width: 35%;
  height: auto;
  padding: 0.5rem;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #eceeed;
  border-radius: 6px;

  h4 {
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  table {
    width: 100%;
    font-size: 0.9rem;
    border: 1px solid #333;
  }

  th {
    border-bottom: 1px solid #333;
    border-left: 1px solid #333;
  }

  td {
    border-left: 1px solid #333;
  }
`;
