import { get, post } from "./baseApi";

export const getBookmarks = async () => {
  const res = await get(`/bookmarks`);
  return res.data;
};

export const createBookmark = async (userId, trailId) => {
  const res = await post(`bookmarks/create/${userId}/${trailId}`);
  return res.data;
};

export const removeBookmark = async (userId, trailId) => {
  const res = await post(`bookmarks/remove/${userId}/${trailId}`);
  return res.data;
};
