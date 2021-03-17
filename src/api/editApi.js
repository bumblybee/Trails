import { post } from "./baseApi";

export const suggestTrailEdit = async (data) => {
  const res = await post(`/trails/suggest-edit`, data);
  return res.data;
};
