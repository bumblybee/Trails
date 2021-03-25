import React, { useState } from "react";
import { SuccessContext } from "./SuccessContext";

const SuccessProvider = ({ children }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  const setSuccess = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3500);
  };

  return (
    <SuccessContext.Provider value={{ successMessage, setSuccess }}>
      {children}
    </SuccessContext.Provider>
  );
};

export default SuccessProvider;
