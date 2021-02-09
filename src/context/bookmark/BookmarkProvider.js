import React, { useState, useCallback, useEffect } from "react";
import { BookmarkContext } from "./BookmarkContext";
import { getBookmarks, createBookmark } from "../../api/bookmarkApi";

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const getUserBookmarks = useCallback(
    async (userId) => {
      const returnedBookmarks = await getBookmarks(userId);
      setBookmarks(returnedBookmarks);
      return bookmarks;
    },
    [bookmarks]
  );

  const createUserBookmark = async (userId, trailId) => {
    const returnedBookmarks = await createBookmark(userId, trailId);
    setBookmarks(returnedBookmarks);
    return bookmarks;
  };

  return (
    <BookmarkContext.Provider
      value={{ getUserBookmarks, bookmarks, createUserBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
