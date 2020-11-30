import { get } from "./baseApi";

export const getTrails = async (lat, lng, filter) => {
  const res = await get(`/trails/?lat=${lat}&lng=${lng}&filter=${filter}`);

  return res.data;
};
