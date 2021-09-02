import styled from "styled-components";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

export const StyledMapSearchbar = styled.div`
  border: 1px solid #eceeed;
  border-radius: 6px;
  padding: 0.25rem;
  background: #fffeff;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 15%;
  left: 70%;
  transform: translateX(-50%);
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.03);
  width: 100%;
  max-width: 370px;
  z-index: 10;

  :hover {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.08),
      inset 0 0 4px 2px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 1024px) {
    width: auto;
    left: 57%;
  }

  @media (max-width: 620px) {
    padding: 0.2rem;
    height: 70%;
    width: 45%;
    left: 61.5%;
  }
`;
export const StyledComboBox = styled(Combobox)`
  @media (max-width: 620px) {
    width: 60%;
  }
`;

export const StyledComboList = styled(ComboboxList)`
  color: #99a29e;
  background: #fffeff;
  width: 369px;
  padding: 0.5rem 0;
  transform: translateX(-6%) translateY(10%);
  font-size: 0.95rem;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  @media (max-width: 620px) {
    width: 203%;
    font-size: 0.88rem;
    padding: 0.25rem 0;
    transform: translateX(-4%) translateY(7%);
  }
`;

export const StyledComboboxOption = styled(ComboboxOption)`
  padding: 0.5rem;

  :hover {
    background: #f9f9f9;
    cursor: pointer;
  }
`;

export const StyledComboInput = styled(ComboboxInput)`
  border: none;
  margin-left: 1rem;
  height: 100%;
  font-size: 0.95rem;
  color: #99a29e;
  outline: none;
  caret-color: #fe7762;

  ::placeholder {
    color: #d0d4d2;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 620px) {
    margin-left: 0.25rem;
    font-size: 0.88rem;
  }
`;
