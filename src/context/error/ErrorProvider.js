import React, { useState } from "react";
import { toast } from "react-toastify";

import { ErrorContext } from "./ErrorContext";

const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const setError = (msg) => {
    toast.error(msg);
    setErrorMessage(msg);
    setTimeout(() => {
      setError(null);
    }, 10000);
  };

  return (
    <ErrorContext.Provider value={{ errorMessage, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
