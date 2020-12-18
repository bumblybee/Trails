import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { ErrorContext } from "../../context/error/ErrorContext";

const Error = () => {
  const { errorMessage } = useContext(ErrorContext);

  return (
    errorMessage !== null && (
      <ToastContainer
        position="top-center"
        autoClose={6000}
        draggable
        pauseOnHover
        closeOnClick
      />
    )
  );
};

export default Error;
