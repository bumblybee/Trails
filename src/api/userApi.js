import { get, post } from "./baseApi";

export const signupUser = async (data) => {
  const res = await post("/users/signup", data);
  return res.data;
};
