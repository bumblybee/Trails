import styled from "styled-components";

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
    display: none;

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

  @media (max-width: 620px) {
    top: auto;
    bottom: 0.25rem;
    right: auto;
    left: 0.2rem;
    font-size: 0.85rem;
    padding: 0.25rem;
  }

  input {
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
    font-size: 0.6rem;
    top: 0.4rem;
    left: 0.1rem;
    color: #fff;
    cursor: pointer;

    @media (max-width: 620px) {
      font-size: 0.525rem;
    }
  }
`;
