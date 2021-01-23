import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPinkButton = styled.button`
  background: #fe7762;
  display: block;
  width: 100%;
  color: #fff;
  padding: 12px 18px;
  border-radius: 6px;
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

export const StyledLoginSignupFormContainer = styled.div`
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

export const StyledLoginSignupForm = styled.form`
  width: 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 11% auto;
  border: 1px solid #eceeed;
  background: #fff;

  border-radius: 6px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);

  div.form-group {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.3rem;
  }

  div.form-header {
    text-align: center;
    width: 75%;
    margin-bottom: 1rem;
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
    padding: 14px 0;
    width: 70%;
    background: #fe7762;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 4px;

    :hover {
      cursor: pointer;
      background: #fe9787;
    }

    :active {
      transform: scale(0.98);
    }
  }
`;

export const StyledFormLink = styled(Link)`
  color: #fe7762;
  text-decoration: none;
  margin-top: 1rem;
`;

export const StyledHr = styled.hr`
  margin: 1rem auto 2rem;
  border: 1px solid #b9c8b8;
  width: 100%;
`;
