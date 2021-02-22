import styled from "styled-components";

export const StyledEditTrailFormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: #fff;
  width: 25%;
  padding: 2rem 2rem 1rem;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #eceeed;
  border-radius: 6px;

  label {
    display: block;
    margin-bottom: 0.3rem;
  }

  label:not(.type):not(.difficulty) {
    font-weight: 500;
  }

  label span {
    color: #a5afab;
    font-weight: 300;
  }

  textarea {
    width: 99%;
  }

  input[type="checkbox"] {
    margin-right: 0.25rem;
  }

  input[type="text"] {
    width: 70%;
  }

  input[type="text"],
  input[type="number"],
  textarea {
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
`;

export const StyledForm = styled.form`
  padding-top: 1rem;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 1.3rem;
`;

export const StyledFormButton = styled.button`
  padding: 10px 18px;
  background: ${(props) => (props.submitButton ? "#fe7762" : "#fff")};
  color: ${(props) => (props.submitButton ? "#fff" : "#a5b8a4")};
  border: 2px solid transparent;
  outline: none;
  border-radius: 6px;
  margin-right: 0.5rem;

  :hover {
    cursor: pointer;

    background: #fff;
    color: ${(props) => (props.submitButton ? "#fe7762" : "#a5b8a4")};
    border: ${(props) =>
      props.submitButton ? "2px solid #fe7762" : "2px solid #a5b8a4"};
  }

  :active {
    color: #fff;
    background: ${(props) => (props.submitButton ? "#fe7762" : "#a5b8a4")};

    border: 2px solid transparent;
  }
`;

export const StyledMessage = styled.p`
  font-size: 0.9rem;
`;
