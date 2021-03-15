import React, { useContext, useEffect, useState } from "react";
import Loader from "../../components/layout/loader/Loader";

import { BookmarkContext } from "../../context/bookmark/BookmarkContext";
import { UserContext } from "../../context/user/UserContext";

import TrailCard from "../../components/layout/cards/TrailCard";

import * as sc from "./StyledBookmarks";

const Bookmarks = () => {
  const { getUserBookmarks } = useContext(BookmarkContext);
  const { user } = useContext(UserContext);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    user && getUserBookmarks().then((data) => setBookmarks(data));
  }, [bookmarks]);

  return (
    <sc.StyledBookmarksContainer>
      <h3>Bookmarked Trails</h3>
      <sc.StyledCardContainer>
        {bookmarks && bookmarks.length ? (
          bookmarks.map((bookmark) => (
            <TrailCard
              key={bookmark.id}
              trail={bookmark.trail}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
            />
          ))
        ) : (
          <sc.StyledNoBookmarksContainer>
            <p>Looks like you haven't bookmarked any trails yet.</p>
          </sc.StyledNoBookmarksContainer>
        )}
      </sc.StyledCardContainer>
    </sc.StyledBookmarksContainer>
  );
};

export default Bookmarks;
