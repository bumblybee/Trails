import React, { useContext, useEffect, useState } from "react";

import { BookmarkContext } from "../../context/bookmark/BookmarkContext";

import TrailCard from "../../components/layout/cards/TrailCard";

import * as sc from "./StyledBookmarks";

const Bookmarks = () => {
  const { getUserBookmarks } = useContext(BookmarkContext);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    getUserBookmarks().then((data) => setBookmarks(data));
  }, [bookmarks]);

  return (
    <sc.StyledBookmarksContainer>
      <h3>Bookmarked Trails</h3>
      <sc.StyledCardContainer>
        {bookmarks && bookmarks.length ? (
          bookmarks.map((bookmark) => (
            <TrailCard
              trail={bookmark.trail}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
            />
          ))
        ) : (
          <h4>No bookmarks to show</h4>
        )}
      </sc.StyledCardContainer>
    </sc.StyledBookmarksContainer>
  );
};

export default Bookmarks;
