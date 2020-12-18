const errorCodeToMessage = {
  "upload.failed": "Something went wrong with the upload",
};

// Pass array of errors to handleErrors fn
const handleErrorsArray = (array) => {
  const errors = array.map(handleErrors);
  return errors;
};

// Return error message
const handleErrors = (errorCode) => {
  const errorMessage = errorCodeToMessage[errorCode];

  if (errorMessage) {
    return { error: errorMessage };
  }

  return {
    error: "Uh-oh, something is unexpectedly broken. Please contact support.",
  };
};

export { handleErrors, handleErrorsArray };
