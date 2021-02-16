import React, { useContext } from "react";

import { BookmarkContext } from "../../context/bookmark/BookmarkContext";

const Bookmarks = () => {
  const { bookmarks, getUserBookmarks } = useContext(BookmarkContext);
  console.log(bookmarks);
  return (
    <div style={{ padding: "3rem" }}>
      <h1>bookmarks</h1>
    </div>
  );
};

export default Bookmarks;
