import React, { useContext, useEffect } from "react";

import { BookmarkContext } from "../../context/bookmark/BookmarkContext";

import TrailCard from "../../components/layout/cards/TrailCard";

import * as sc from "./StyledBookmarks";

const Bookmarks = () => {
  const { bookmarks, getUserBookmarks } = useContext(BookmarkContext);

  useEffect(() => {
    getUserBookmarks().then((data) => console.log(data));
  }, []);

  return (
    <sc.StyledBookmarksContainer>
      <sc.StyledCardContainer>
        {bookmarks && bookmarks.length ? (
          bookmarks.map((bookmark) => <TrailCard trail={bookmark.trail} />)
        ) : (
          <h4>No bookmarks to show</h4>
        )}
      </sc.StyledCardContainer>
    </sc.StyledBookmarksContainer>
  );
};

export default Bookmarks;
