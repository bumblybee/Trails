import React, { useState } from "react";
import { BookmarkContext } from "./BookmarkContext";
import { getBookmarks } from "../../api/bookmarkApi";

const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const getUserBookmarks = async (userId) => {
    const returnedBookmarks = await getBookmarks(userId);
    setBookmarks(returnedBookmarks.bookmarks);
    console.log(bookmarks);
    return bookmarks;
  };

  return (
    <BookmarkContext.Provider value={{ getUserBookmarks, bookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
