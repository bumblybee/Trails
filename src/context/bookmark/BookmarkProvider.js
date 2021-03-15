import React, { useState, useCallback, useEffect } from "react";
import { BookmarkContext } from "./BookmarkContext";
import {
  getBookmarks,
  getLatestBookmarks,
  createBookmark,
  removeBookmark,
} from "../../api/bookmarkApi";

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(null);
  const [latestBookmarks, setLatestBookmarks] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserBookmarks = useCallback(async (id) => {
    setLoading(true);
    const returnedBookmarks = await getBookmarks(id);
    setLoading(false);
    setBookmarks(returnedBookmarks);
    return returnedBookmarks;
  }, []);

  const getLatest = useCallback(async () => {
    const latest = await getLatestBookmarks();

    setLatestBookmarks(latest);
    return latest.data;
  }, []);

  const createUserBookmark = async (userId, trailId) => {
    const returnedBookmarks = await createBookmark(userId, trailId);
    setBookmarks(returnedBookmarks.bookmarks);
    return returnedBookmarks.bookmarks;
  };

  const removeUserBookmark = async (userId, trailId) => {
    const returnedBookmarks = await removeBookmark(userId, trailId);
    setBookmarks(returnedBookmarks.bookmarks);
    return returnedBookmarks.bookmarks;
  };

  useEffect(() => {
    getUserBookmarks();
    getLatest();
  }, []);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        latestBookmarks,
        loading,
        setBookmarks,
        getUserBookmarks,
        createUserBookmark,
        removeUserBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
