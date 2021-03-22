import React, { useContext } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import { ErrorContext } from "../../context/error/ErrorContext";
import { StyledError } from "./StyledError";

const Error = () => {
  const { errorMessage } = useContext(ErrorContext);

  return (
    errorMessage !== null && <StyledError draggable>{errorMessage}</StyledError>
  );
};

export default Error;
