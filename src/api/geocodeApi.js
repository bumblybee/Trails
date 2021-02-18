import { get } from "./baseApi";

export const geocode = async (lat, lng) => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  );

  const data = await res.json();

  return data;
};
