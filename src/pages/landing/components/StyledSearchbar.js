import styled from "styled-components";
import {
  ComboboxInput,
  ComboboxList,
  ComboboxPopover,
  ComboboxOption,
} from "@reach/combobox";

export const StyledSearchbarContainer = styled.div`
  border: 0.5px solid #eceeed;
  padding: 1rem;
  background: #fffeff;
  z-index: 10;
  box-shadow: 0 2px 12px 1px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  /* width: 80%; */
  @media (max-width: 620px) {
    padding: 0.7rem;
    width: 100%;
  }
`;

export const StyledSearchbar = styled.div`
  border: 1px solid #eceeed;

  border-radius: 100px;
  padding: 1rem;
  background: #fffeff;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.07);

  :hover {
    box-shadow: inset 0 0 6px 3px rgba(0, 0, 0, 0.08);
    /* border: 1px solid #eceeed55; */

    button {
      box-shadow: inset 0 0 6px 2px rgba(255, 255, 255, 0.07);
    }
  }

  @media (max-width: 620px) {
    padding: 0.3rem;
  }
`;

//TODO: Separation between dropdown and searchbar
export const StyledComboPopover = styled(ComboboxPopover)`
  z-index: 1;
  border: none;
  margin-top: 3rem;
  border-radius: 6px;
`;

export const StyledComboInput = styled(ComboboxInput)`
  border: none;
  outline: none;
  margin-left: 1rem;
  height: 100%;
  width: 700px;
  color: #99a29e;
  caret-color: #fe7762;

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
  color: #99a29e;
  background: #fffeff;
  font-size: 1rem;
  border-radius: 6px;
  transform: translateX(-5.2%);
  border: none;
  padding: 0.5rem 0 0.5rem 1.4rem;
`;

export const StyledComboboxOption = styled(ComboboxOption)`
  padding: 0.5rem;
  border-radius: 6px;

  :hover {
    cursor: pointer;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 15%;

  @media (max-width: 620px) {
    grid-gap: 0.5rem;
  }
`;
