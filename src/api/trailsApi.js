import { getTrails } from "./baseApi";

export const findBikingTrails = async (lat, lng) => {
  const res = await getTrails(
    `/explore/?q-activities_activity_type_name_eq=hiking&lat=${lat}&lon=${lng}`
  );
  // const res = await getTrails("/explore/?lat=42.4934&lon=-92.343643");
  return res.data.data;
};
