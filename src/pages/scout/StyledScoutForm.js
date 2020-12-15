import styled from "styled-components";

export const StyledFormContainer = styled.div`
  width: 60%;
  margin: 2.5rem auto;
  padding: 2rem 2.5rem;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #eceeed;

  position: relative;

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

  label span {
    color: #a5afab;
    font-weight: 300;
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

export const StyledHr = styled.hr`
  margin: 1rem 0 1.5rem;
  border: 2px solid #b9c8b8;
`;

export const StyledForm = styled.form``;

export const StyledFormGroup = styled.div`
  margin-bottom: 1.3rem;
`;

export const StyledUploadContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 1rem;
  width: 40%;
  height: 140px;
`;

export const StyledDragDrop = styled.div`
  border: ${(props) =>
    props.isDragActive ? "4px dashed #fe7762" : "4px dashed #eceeed"};
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  :hover {
    cursor: pointer;
  }

  p {
    font-weight: 300;
    font-size: 0.9rem;
    color: #99a29e;
    padding: 1rem;
    text-align: center;
  }

  svg {
    color: #eceeed99;
    width: 5rem;
    height: 5rem;
    position: absolute;
    z-index: -10;
    /* transform: translate(105%, -15%); */
  }
`;

export const StyledImagePreview = styled.div`
  border: 4px solid #eceeed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #eceeed99;
    width: 5rem;
    height: 5rem;
    position: absolute;
    z-index: -10;
  }

  img {
    height: 132px;
    width: 100%;
    object-fit: cover;
  }

  p {
    color: #eceeed;
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 600;
    color: #fe7762;
    text-shadow: -0.5px 0 1px #eceeed;

    :hover {
      cursor: pointer;
    }
  }
`;

export const StyledFormButton = styled.button`
  padding: 10px 18px;
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
