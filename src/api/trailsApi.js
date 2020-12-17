import { get, postFormData } from "./baseApi";

export const getTrails = async (lat, lng, filter) => {
  const res = await get(`/trails/?lat=${lat}&lng=${lng}&filter=${filter}`);

  return res.data;
};

export const scoutTrail = async (data, onUploadProgress) => {
  const res = await postFormData(`/trails`, data, onUploadProgress);
  console.log(res);
  return res;
};
