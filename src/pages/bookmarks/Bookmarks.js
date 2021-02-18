import React, { useContext } from "react";

import { BookmarkContext } from "../../context/bookmark/BookmarkContext";

import TrailCard from "../../components/layout/cards/TrailCard";

const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <div style={{ padding: "3rem" }}>
      {bookmarks ? (
        bookmarks.map((bookmark) => <TrailCard trail={bookmark.trail} />)
      ) : (
        <p>No bookmarks to show</p>
      )}
    </div>
  );
};

export default Bookmarks;
