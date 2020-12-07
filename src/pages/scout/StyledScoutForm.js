import styled from "styled-components";

export const StyledFormContainer = styled.div`
  width: 60%;
  margin: 2.5rem auto;
  padding: 2rem;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  label {
    display: block;
    margin-bottom: 0.3rem;
  }

  label:not(.type):not(.difficulty) {
    font-weight: 500;
  }

  label.type {
    margin-right: 0.5rem;
  }

  input[type="text"],
  input[type="number"],
  textarea {
    border: none;
    background: #eceeed;
    padding: 0.4rem;
    font-weight: 300;

    :focus {
      border: none;
      outline: none;
    }
  }

  span {
    color: #b9c8b8;
  }
`;

export const StyledHr = styled.hr`
  margin: 1rem 0 1.5rem;
`;

export const StyledForm = styled.form``;

export const StyledFormGroup = styled.div`
  margin-bottom: 1.3rem;
`;

export const StyledFormButton = styled.button`
  padding: 10px 16px;
  margin-right: 0.5rem;
  background: ${(props) => (props.submitButton ? "#fe7762" : "#a5b8a4")};
  color: #fff;
  border: none;
  outline: none;
  border-radius: 6px;

  :hover {
    cursor: pointer;
    background: ${(props) => (props.submitButton ? "#fe9787" : "#b9c8b8")};
  }

  :active {
    transform: scale(0.98);
  }
`;
