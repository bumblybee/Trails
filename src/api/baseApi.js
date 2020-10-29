import axios from "axios";

const bikingURL = "https://trailapi-trailapi.p.rapidapi.com/trails";

const hikingURL = "https://www.hikingproject.com/data";

const baseURL = "http://localhost:9000";

const bikingInstance = axios.create({
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_BIKING_API_KEY,
  },
  baseURL: bikingURL,

  crossDomain: true,
});

const hikingInstance = axios.create({
  baseURL: hikingURL,

  crossDomain: true,
});

const serverInstance = axios.create({
  baseURL,
  withCredentials: true,
  crossDomain: true,
});

export const getBikingTrails = async (url) => {
  return await bikingInstance.get(url).catch((e) => {
    console.log(e);
  });
};

export const getHikingTrails = async (url) => {
  return await hikingInstance.get(url).catch((e) => {
    console.log(e);
  });
};

export const getServer = async (url) => {
  return await serverInstance.get(url).catch((e) => {
    console.log(e);
  });
};
