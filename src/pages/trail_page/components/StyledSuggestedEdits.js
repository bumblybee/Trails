import styled from "styled-components";

export const StyledSuggestedEditsContainer = styled.div`
  position: absolute;
  top: 35%;
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
    text-align: center;
    margin-bottom: 1rem;
    text-transform: capitalize;
    font-size: 1.7rem;
  }

  table {
    width: 100%;
    font-size: 0.9rem;
    border-collapse: collapse;
  }

  th {
    border: 1px solid #333;
  }

  td {
    border: 1px solid #333;
  }
`;
