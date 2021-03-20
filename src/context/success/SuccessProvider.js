import React, { useState } from "react";
import { SuccessContext } from "./SuccessContext";
import { toast } from "react-toastify";

const SuccessProvider = ({ children }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  const setSuccess = (msg) => {
    toast.success(msg);
    setSuccessMessage(msg);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 7000);
  };

  return (
    <SuccessContext.Provider value={{ successMessage, setSuccess }}>
      {children}
    </SuccessContext.Provider>
  );
};

export default SuccessProvider;
