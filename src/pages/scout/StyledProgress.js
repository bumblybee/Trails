import styled from "styled-components";

export const StyledProgressContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  z-index: 100;
  width: 40%;
  background: #b9c8b8;
  padding: 6rem;
  border-radius: 6px;
  text-align: center;
  transition: width linear;

  h2 {
    color: #fff;
  }
`;

export const StyledProgressBar = styled.div`
  background-color: #fe7762;
  padding: 1rem;
  border-radius: 100px;

  color: #fff;
  margin-top: 1rem;
  width: ${(props) => props.progress + "%"};
`;
