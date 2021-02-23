import { get, post, postFormData } from "./baseApi";

export const getTrails = async (lat, lng, filter) => {
  const res = await get(
    `/trails/search?lat=${lat}&lng=${lng}&filter=${filter}`
  );

  return res.data;
};

export const getSingleTrail = async (id) => {
  const res = await get(`/trails/${id}`);
  return res.data;
};

export const getScoutedTrails = async (id) => {
  const res = await get(`/trails/scouted/${id}`);

  return res.data;
};

export const scoutTrail = async (data, onUploadProgress) => {
  const res = await postFormData(`/trails`, data, onUploadProgress);
  console.log(res);
  return res;
};

export const suggestTrailEdit = async (data) => {
  const res = await post(`/trails/suggest-edit`, data);
  return res.data;
};
