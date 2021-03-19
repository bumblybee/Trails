import styled from "styled-components";
import { ComboboxInput, ComboboxList, ComboboxOption } from "@reach/combobox";

export const StyledMapContainer = styled.div`
  position: relative;
  padding-top: 3em;

  div:focus {
    outline: 1px solid transparent;
  }
`;

export const StyledMapLogo = styled.div`
  position: absolute;
  top: 5rem;
  left: 2rem;
  z-index: 100;
  margin: 0;
  padding: 0;

  img {
    width: 100px;
    opacity: 0.8;
  }

  @media (max-width: 620px) {
    bottom: 0.5rem;
    top: auto;
    left: 0.5rem;

    img {
      width: 60px;
    }
  }
`;

export const StyledSearchOnDragCheckbox = styled.div`
  position: absolute;
  top: 5rem;
  right: 2rem;
  z-index: 10;
  font-size: 0.9rem;
  background: #ffffff88;
  padding: 0.5rem;
  text-shadow: 0 0 1px #999;
  border-radius: 6px;

  input {
    /* margin-right: 0.1rem; */
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #34423b;
    border-radius: 2px;
    outline: none;
    transition-duration: 0.1s;
    background-color: #ffffff88;
    cursor: pointer;
    padding: 0.3rem;
  }

  input:checked {
    background: #fe7762;
    border: 1px solid #fe7762;
  }

  label {
    position: relative;
  }

  .faCheck {
    position: absolute;
    /* z-index: 20; */
    font-size: 0.6rem;
    top: 0.4rem;
    left: 0.1rem;
    color: #fff;
    cursor: pointer;
  }
`;

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

  :hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 620px) {
    padding: 0.3rem;
    height: 12%;
    width: 85%;
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

  ::placeholder {
    color: #d0d4d2;
  }

  @media (max-width: 620px) {
    margin-left: 0.2rem;
  }
`;
