import axios from "axios";
import { handleErrors, handleErrorsArray } from "../handlers/errorHandler";

const baseURL = "http://localhost:9000";

//??How can I tie upload progress percentage to state if firing outside component?
export const uploadProgress = (progress) => {
  const { loaded, total } = progress;
  let percent = Math.floor((loaded * 100) / total);
  console.log(percent);
  return percent;
};

const instance = axios.create({
  baseURL,
  withCredentials: true,
  crossDomain: true,
});

export const get = async (url) => {
  return await instance.get(url).catch((e) => {
    if (e.response) {
      if (e.response && e.response.data.errors) {
        const errors = handleErrorsArray(e.response.data.errors);

        return errors;
      }

      return handleErrors(e.response.data.error);
    }
  });
};

export const post = async (url, data) => {
  return await instance.post(url, data).catch((e) => {
    if (e.response) {
      if (e.response && e.response.data.errors) {
        const errors = handleErrorsArray(e.response.data.errors);

        return errors;
      }

      return handleErrors(e.response.data.error);
    }
  });
};

export const postFormData = async (url, data, onUploadProgress) => {
  return await instance
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    })
    .catch((e) => {
      if (e.response) {
        if (e.response && e.response.data.errors) {
          const errors = handleErrorsArray(e.response.data.errors);

          return errors;
        }

        return handleErrors(e.response.data.error);
      }
    });
};
