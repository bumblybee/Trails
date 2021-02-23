import styled from "styled-components";

export const StyledBlackout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledHr = styled.hr`
  margin: 1rem 0;
  border: 2px solid #b9c8b8;
`;

export const StyledEditTrailFormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: #fff;
  width: 28%;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #eceeed;
  border-radius: 6px;

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
  }

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

  input[type="checkbox"] {
    margin-right: 0.25rem;
  }

  input[type="text"] {
    width: 60%;
  }

  input[type="text"],
  input[type="number"],
  textarea {
    border: 1px solid #a5afab;
    background: #eceeed;
    padding: 0.5rem;

    font-weight: 300;
    line-height: 1;

    :focus {
      /* border: none; */
      outline: none;
    }

    ::placeholder {
      font-weight: 300;
      color: #99a29e;
    }
  }

  textarea {
    width: 99%;
    line-height: 1.2;
  }
`;

export const StyledForm = styled.form`
  padding-top: 1rem;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 1.3rem;
  :nth-child(9) {
    margin-bottom: 0.5rem;
  }
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
  font-size: 0.95rem;
  font-weight: 400;
  width: 85%;
  line-height: 1.2;
`;
