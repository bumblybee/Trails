import React, { useState, useCallback, useEffect } from "react";
import { BookmarkContext } from "./BookmarkContext";
import { getBookmarks } from "../../api/bookmarkApi";

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const getUserBookmarks = async (userId) => {
    const returnedBookmarks = await getBookmarks(userId);
    setBookmarks(returnedBookmarks);
    console.log(bookmarks);
  };

  return (
    <BookmarkContext.Provider value={{ getUserBookmarks, bookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
