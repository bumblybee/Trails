import { getBikingTrails, getHikingTrails } from "./baseApi";

export const findBikingTrails = async (lat, lng) => {
  const res = await getBikingTrails(
    `/explore/?q-activities_activity_type_name_eq=hiking&lat=${lat}&lon=${lng}`
  );

  return res.data.data;
};

export const findHikingTrails = async (lat, lng) => {
  const res = await getHikingTrails(
    `/get-trails?lat=${lat}&lon=${lng}&maxDistance=25&key=${process.env.REACT_APP_HIKING_API_KEY}`
  );

  return res;
};
