import axios from "axios";

const trailsURL = "https://trailapi-trailapi.p.rapidapi.com/trails";

const baseURL = "http://localhost:9000";

const trailsInstance = axios.create({
  headers: {
    "x-rapidapi-key": "198237b8e7msh115f216b181beb8p105c8ajsnb325b2607f5b",
  },
  baseURL: trailsURL,

  crossDomain: true,
});

const serverInstance = axios.create({
  baseURL,
  withCredentials: true,
  crossDomain: true,
});

export const getTrails = async (url) => {
  return await trailsInstance.get(url).catch((e) => {
    console.log(e);
  });
};

export const getServer = async (url) => {
  return await serverInstance.get(url).catch((e) => {
    console.log(e);
  });
};
