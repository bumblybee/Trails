import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNotificationPopup = styled.div`
  background: ${(props) => (props.origin === "error" ? "#ff644d" : "#b1ce7c")};
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

export const StyledPinkButton = styled.button`
  background: #fe7762;
  display: block;
  width: 100%;
  color: #fff;
  padding: 12px 18px;
  border-radius: 32px;
  border: none;
  outline: none;
  font-weight: 400;
  text-align: center;
  position: relative;

  :hover {
    cursor: pointer;
    background: #fe9787;

    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.07);
  }

  :active {
    transform: scale(0.98);
  }

  @media (max-width: 620px) {
    padding: 10px 14px;
  }
`;

export const StyledDisabledButton = styled.button`
  background: #fe97877a;
  display: block;
  width: 100%;
  color: #fff;
  padding: 12px 18px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-weight: 400;
  text-align: center;
  position: relative;

  @media (max-width: 620px) {
    padding: 10px 14px;
  }
`;

export const StyledUserFormContainer = styled.div`
  padding: 3rem;
  background: linear-gradient(
    to bottom,
    rgba(52, 66, 59, 0.9) 40%,
    rgba(52, 66, 59, 0.7)
  );
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const StyledUserForm = styled.form`
  position: absolute;
  width: 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #eceeed;
  background: #fff;

  border-radius: 6px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);

  div.form-group {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-bottom: ${(props) =>
      props.origin === "signup" ? "1rem" : "1.3rem"};

    @media (max-width: 620px) {
      width: 95%;
    }
  }

  div.form-header {
    text-align: center;
    width: 70%;
    margin-bottom: 1rem;
    margin: ${(props) =>
      props.origin === "reset" ? "1rem 0 2rem" : "0 0 1rem"};

    @media (max-width: 620px) {
      width: 95%;

      margin: ${(props) =>
        props.origin === "reset" ? "0 0 2rem" : "0 0 1rem"};
    }
  }

  label {
    display: block;
    margin-bottom: 0.3rem;
  }

  input {
    border: none;
    background: #eceeed;
    padding-left: 0.5rem;
    font-weight: 300;
    height: 2.4rem;

    :focus {
      border: none;
      outline: none;
    }

    ::placeholder {
      font-weight: 300;
      color: #99a29e;
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  button {
    padding: 10px 0;
    width: 70%;
    background: #fe7762;
    color: #fff;
    font-weight: bold;
    border: 2px solid transparent;
    outline: none;
    border-radius: 4px;

    @media (max-width: 620px) {
      width: 95%;
    }

    :hover {
      cursor: pointer;
      background: #fff;
      color: #fe7762;
      border: 2px solid #fe7762;
    }

    :active {
      transform: scale(0.98);
    }
  }

  @media (max-width: 620px) {
    width: 90%;
  }
`;

export const StyledFormLink = styled(Link)`
  color: #fe7762;
  text-decoration: none;
  margin-top: 1rem;
`;

export const StyledPasswordInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 220%);
    color: #7f7f7f;

    :hover {
      cursor: pointer;
    }
  }
`;

export const StyledHr = styled.hr`
  margin: 1rem auto 2rem;
  border: 1px solid #b9c8b8;
  width: 100%;

  @media (max-width: 620px) {
    margin: 0.5rem auto 1rem;
  }
`;

export const StyledFormFooter = styled.div`
  display: flex;
  p {
    margin: 1rem 0.5rem;
    color: #b9c8b8;
  }
`;
