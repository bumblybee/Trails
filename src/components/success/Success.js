import React, { useContext } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import { SuccessContext } from "../../context/success/SuccessContext";

const Success = () => {
  const { sucessMessage } = useContext(SuccessContext);
  return (
    sucessMessage !== null && (
      <ToastContainer
        style={{ background: "#fe7762" }}
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

export default Success;
