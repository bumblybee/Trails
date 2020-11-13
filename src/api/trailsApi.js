import { get } from "./baseApi";

export const getTrails = async (lat, lng) => {
  const res = await get(`/trails/?lat=${lat}&lng=${lng}`);

  return res.data;
};
