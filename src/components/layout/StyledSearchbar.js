import styled from "styled-components";

export const StyledSearchbarContainer = styled.div`
  border: 0.5px solid #eceeed;
  padding: 1rem;
  ${"" /* width: 80%; */}
  ${"" /* margin: 21% auto; */}
  background: #fffeff;
  z-index: 10;
  box-shadow: 0 2px 12px 1px rgba(0, 0, 0, 0.07);

  @media (max-width: 620px) {
    width: 100%;
    ${"" /* margin: 45% auto; */}
    padding: 0.7rem;
  }
`;

export const StyledSearchbar = styled.div`
  border: 1px solid #eceeed;
  padding: 1rem;
  background: #fffeff;
  z-index: 10;

  :hover {
    border: 1px solid transparent;
    padding: 1rem;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 620px) {
    padding: 0.3rem;
  }
`;

export const StyledSearchForm = styled.form`
  color: #99a29e;
  display: flex;
  justify-content: space-between;
`;

export const StyledSearchInput = styled.input`
  border: none;
  margin-left: 1rem;
  height: 100%;
  width: 300px;
  color: #99a29e;
  outline: none;

  ::placeholder {
    color: #d0d4d2;
  }

  @media (max-width: 620px) {
    margin-left: 0.2rem;
  }
`;
