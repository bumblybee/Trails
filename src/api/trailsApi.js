import { get, post } from "./baseApi";

export const getTrails = async (lat, lng, filter) => {
  const res = await get(`/trails/?lat=${lat}&lng=${lng}&filter=${filter}`);

  return res.data;
};

export const scoutTrail = async (data) => {
  const res = await post(`/trails`, data);
  console.log(data);
  return res;
};
