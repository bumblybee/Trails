import { get, post } from "./baseApi";

export const getBookmarks = async (userId) => {
  const res = await get(`/bookmarks/${userId}`);
  return res.data;
};

export const createBookmark = async (userId, trailId) => {
  const res = await post(`bookmarks/create/${userId}/${trailId}`);
  return res.data;
};
