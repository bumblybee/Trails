import React, { useState, useCallback, useEffect } from "react";
import { BookmarkContext } from "./BookmarkContext";
import {
  getBookmarks,
  createBookmark,
  removeBookmark,
} from "../../api/bookmarkApi";

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const getUserBookmarks = useCallback(async () => {
    const returnedBookmarks = await getBookmarks();
    setBookmarks(returnedBookmarks);
    return returnedBookmarks;
  }, [bookmarks]);

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
  }, []);

  return (
    <BookmarkContext.Provider
      value={{
        getUserBookmarks,
        bookmarks,
        createUserBookmark,
        removeUserBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
