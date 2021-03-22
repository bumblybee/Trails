import styled from "styled-components";
import { ToastContainer, Zoom } from "react-toastify";

export const StyledError = styled.div`
  background: #ff644d;
  text-align: center;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 6px;
  width: 20%;
  position: absolute;
  left: 50%;
  top: 2%;
  transform: translateX(-50%);
  color: #fff;

  @media (max-width: 620px) {
    width: 100%;
    font-size: 1.1rem;
  }
`;
