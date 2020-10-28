import styled from "styled-components";
import { ComboboxInput, ComboboxList, ComboboxOption } from "@reach/combobox";

export const StyledMapContainer = styled.div`
  position: relative;
`;

export const StyledMapLogo = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  margin: 0;
  padding: 0;

  img {
    width: 120px;
  }
`;

export const StyledMapSearchbar = styled.div`
  border: 1px solid #eceeed;
  padding: 0.7rem;
  background: #fffeff;
  display: flex;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;

  @media (max-width: 620px) {
    padding: 0.3rem;
  }
`;

export const StyledComboboxOption = styled(ComboboxOption)`
  padding: 0.5rem 1rem;

  :hover {
    background: #f9f9f9;
    cursor: pointer;
  }
`;

export const StyledComboList = styled(ComboboxList)`
  list-style: none;
  color: #99a29e;
  background: #fffeff;
  padding-top: 0.5rem;

  width: 345px;
  transform: translateX(-12.2%);
`;

export const StyledComboInput = styled(ComboboxInput)`
  border: none;
  margin-left: 1rem;
  height: 100%;
  font-size: 0.95rem;
  color: #99a29e;
  outline: none;

  ::placeholder {
    color: #d0d4d2;
  }

  @media (max-width: 620px) {
    margin-left: 0.2rem;
  }
`;
