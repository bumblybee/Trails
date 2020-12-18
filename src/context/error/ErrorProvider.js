import React, { useState } from "react";
import { toast } from "react-toastify";

import { ErrorContext } from "./ErrorContext";

const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const setError = (msg) => {
    setErrorMessage(msg);
    toast(msg, { type: toast.TYPE.ERROR });
    setTimeout(() => {
      setError(null);
    }, 7000);
  };

  return (
    <ErrorContext.Provider value={{ errorMessage, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
