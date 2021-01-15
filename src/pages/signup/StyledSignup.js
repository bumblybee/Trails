import styled from "styled-components";

export const StyledSignupContainer = styled.div`
  padding: 3rem;
`;

export const StyledForm = styled.form`
  width: 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 9rem auto;
  border: 1px solid #eceeed;

  border-radius: 4px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);

  div.form-group {
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
    padding: 0.5rem;
    font-weight: 300;

    :focus {
      border: none;
      outline: none;
    }

    ::placeholder {
      font-weight: 300;
      color: #99a29e;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0.25rem;
  }

  button {
    padding: 15px 15%;
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
  margin: 1rem 0 2rem;
  border: 1px solid #b9c8b8;
  width: 100%;
`;
