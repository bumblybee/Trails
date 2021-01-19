const errorCodeToMessage = {
  "upload.failed": "Something went wrong with the upload",
  "auth.invalidCredentials":
    "Invalid Credentials. Check credentials and try again.",
  "auth.existingCredentials":
    "Looks like you already have an account. Please log in.",
  "auth.unknownIssue":
    "An unknown error occured in the process, please contact support.",
  "File too large":
    "File size exceeds 5 MB. Please compress the file or choose another.",
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
