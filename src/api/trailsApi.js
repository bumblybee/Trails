import { getTrails } from "./baseApi";

export const findTrails = async (lat, lng) => {
  const res = await getTrails(`/explore/?lat=${lat}&lon=${lng}`);
  // const res = await getTrails("/explore/?lat=42.4934&lon=-92.343643");
  return res.data.data;
};
