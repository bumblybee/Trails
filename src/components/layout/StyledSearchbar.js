import styled from "styled-components";
import { ComboboxInput, ComboboxList, ComboboxOption } from "@reach/combobox";

export const StyledSearchbarContainer = styled.div`
  border: 0.5px solid #eceeed;
  padding: 1rem;
  background: #fffeff;
  z-index: 10;
  box-shadow: 0 2px 12px 1px rgba(0, 0, 0, 0.07);

  @media (max-width: 620px) {
    padding: 0.7rem;
    width: 100%;
  }
`;

export const StyledSearchbar = styled.div`
  border: 1px solid #eceeed;
  padding: 1rem;
  background: #fffeff;
  z-index: 10;
  display: flex;
  justify-content: space-between;

  :hover {
    border: 1px solid transparent;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 620px) {
    padding: 0.3rem;
  }
`;

export const StyledComboInput = styled(ComboboxInput)`
  border: none;
  margin-left: 1rem;
  height: 100%;
  width: 500px;
  color: #99a29e;
  outline: none;

  ::placeholder {
    color: #d0d4d2;
  }

  @media (max-width: 620px) {
    margin-left: 0.2rem;
    width: 125px;
    font-size: 0.9rem;
  }
`;

export const StyledComboList = styled(ComboboxList)`
  list-style: none;
  color: #fff;
  background: transparent;
  padding: 2rem 0 0.5rem;
  margin-left: 1.1rem;
  width: 368px;
  transform: translateX(-12.2%);
  z-index: 200;
`;

export const StyledComboboxOption = styled(ComboboxOption)`
  padding: 0.5rem 1rem;
  z-index: 200;

  :hover {
    /* background: #f9f9f9; */
    cursor: pointer;
  }
`;

export const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  height: 40px;

  @media (max-width: 620px) {
    grid-gap: 0.5rem;
  }
`;
