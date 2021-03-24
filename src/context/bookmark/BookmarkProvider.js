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

  const getUserBookmarks = async () => {
    setLoading(true);

    const returnedBookmarks = await getBookmarks();
    setBookmarks(returnedBookmarks);
    console.log(returnedBookmarks);
    setLoading(false);

    return returnedBookmarks;
  };

  const getLatest = useCallback(async () => {
    const latest = await getLatestBookmarks();

    setLatestBookmarks(latest);
    return latest;
  }, []);

  const createUserBookmark = useCallback(async (userId, trailId) => {
    const returnedBookmarks = await createBookmark(userId, trailId);

    returnedBookmarks && setBookmarks(returnedBookmarks.bookmarks);

    return returnedBookmarks.bookmarks;
  }, []);

  const removeUserBookmark = async (userId, trailId) => {
    const returnedBookmarks = await removeBookmark(userId, trailId);
    returnedBookmarks && setBookmarks(returnedBookmarks.bookmarks);
    return returnedBookmarks.bookmarks;
  };

  // useEffect(() => {
  //   getUserBookmarks();
  // }, []);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        getLatest,
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
