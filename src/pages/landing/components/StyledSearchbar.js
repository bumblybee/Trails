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

  @media (max-width: 620px) {
    padding: 0.6rem;
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

    button {
      box-shadow: inset 0 0 6px 2px rgba(255, 255, 255, 0.07);
    }
  }

  @media (max-width: 620px) {
    padding: 0.25rem 0.5rem;
  }
`;

export const StyledComboPopover = styled(ComboboxPopover)`
  z-index: 100;
  border: none;
  margin-top: 3rem;
  border-radius: 6px;

  @media (max-width: 620px) {
    margin-top: 1.5rem;
  }
`;

export const StyledComboInput = styled(ComboboxInput)`
  border: none;
  outline: none;
  margin-left: 1rem;
  height: 100%;
  width: 700px;
  color: #99a29e;
  caret-color: #fe7762;
  background: transparent;

  ::placeholder {
    color: #d0d4d2;
  }

  @media (max-width: 620px) {
    margin-left: 0.25rem;
    width: 200px;
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

  @media (max-width: 620px) {
    width: 184%;
    transform: translateX(-6%);
    padding: 0.5rem;
  }
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
  align-items: center;
  height: 40px;
  width: 15%;

  @media (max-width: 620px) {
    grid-gap: 0.25rem;
    width: auto;
    margin: 0 0.5rem;
  }
`;

export const StyledSearchButton = styled.button`
  background: #fe7762;
  display: block;

  color: #fff;
  padding: 10px 10px;
  border-radius: 50%;
  border: 2px solid transparent;
  outline: none;
  font-weight: 400;
  text-align: center;
  position: relative;

  :hover {
    cursor: pointer;
    background: #fff;
    border: 2px solid #fe7762;
    color: #fe7762;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.07);
  }

  :active {
    color: #fff;
    background: #fe7762;

    border: 2px solid transparent;
  }

  @media (max-width: 620px) {
    font-size: 0.8rem;
    padding: 0;
    height: 30px;
    width: 30px;
  }
`;
