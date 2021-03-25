import React, { useState, useCallback } from "react";
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

  const getUserBookmarks = useCallback(async () => {
    const returnedBookmarks = await getBookmarks();
    setBookmarks(returnedBookmarks);

    return returnedBookmarks;
  }, []);

  const getLatest = useCallback(async () => {
    const latest = await getLatestBookmarks();

    setLatestBookmarks(latest);
    return latest;
  }, []);

  const createUserBookmark = async (userId, trailId) => {
    const returnedBookmarks = await createBookmark(userId, trailId);

    returnedBookmarks && setBookmarks(returnedBookmarks.bookmarks);
    return returnedBookmarks.bookmarks;
  };

  const removeUserBookmark = async (userId, trailId) => {
    const returnedBookmarks = await removeBookmark(userId, trailId);

    console.log(returnedBookmarks);
    returnedBookmarks && setBookmarks(returnedBookmarks.bookmarks);
    return returnedBookmarks.bookmarks;
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        getLatest,
        latestBookmarks,
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
