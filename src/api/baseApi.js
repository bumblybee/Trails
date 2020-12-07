import axios from "axios";

const baseURL = "http://localhost:9000";

const formConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const instance = axios.create({
  baseURL,
  withCredentials: true,
  crossDomain: true,
});

export const get = async (url) => {
  return await instance.get(url).catch((e) => {
    console.log(e);
  });
};

export const post = async (url, data) => {
  return await instance.post(url, data).catch((e) => {
    console.log(e);
  });
};
