import { get, post } from "./baseApi";

// TODO: create user context and call getUser on app initiation so if logged in, display different nav link options
export const signupUser = async (data) => {
  const res = await post("/users/signup", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await post("/users/login", data);
  return res;
};
