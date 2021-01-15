import styled from "styled-components";

export const StyledSignupContainer = styled.div`
  padding: 3rem;
  background: linear-gradient(
      to bottom,
      rgba(52, 66, 59, 0.9) 60%,
      rgba(52, 66, 59, 0.9)
    ),
    url("https://images.unsplash.com/photo-1591899761266-148e5928e389?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  height: 94vh;
`;

export const StyledForm = styled.form`
  width: 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 8rem auto;
  border: 1px solid #eceeed;
  background: #fff;

  border-radius: 4px;
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
    margin-top: 1rem;
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

export const StyledHr = styled.hr`
  margin: 1rem auto 2rem;
  border: 1px solid #b9c8b8;
  width: 100%;
`;
