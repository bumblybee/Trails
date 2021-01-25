import React, { useContext } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import { ErrorContext } from "../../context/error/ErrorContext";

const Error = () => {
  const { errorMessage } = useContext(ErrorContext);

  return (
    errorMessage !== null && (
      <ToastContainer
        transition={Zoom}
        position="top-center"
        // autoClose={6000}
        draggable
        pauseOnHover
        closeOnClick
        newestOnTop
      />
    )
  );
};

export default Error;
