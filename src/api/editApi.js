import { get, put, post } from "./baseApi";

export const getEdits = async (trailId) => {
  const res = await get(`/edit/${trailId}`);
  return res.data;
};

export const suggestTrailEdit = async (data) => {
  const res = await post(`/trails/suggest-edit`, data);
  return res.data;
};

export const editTrail = async (data) => {
  const res = await put(`/trails/edit`, data);
  return res.data;
};
