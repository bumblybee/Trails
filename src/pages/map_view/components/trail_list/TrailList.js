import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../../context/user/UserContext";
import { BookmarkContext } from "../../../../context/bookmark/BookmarkContext";
import { SearchContext } from "../../../../context/search/SearchContext";
import TrailListCard from "./TrailListCard";
import { StyledTrailList, StyledTrailListHeader } from "./StyledTrailList";

const TrailList = ({ setHoveredCard }) => {
  const { trails } = useContext(SearchContext);
  const { getUserBookmarks } = useContext(BookmarkContext);
  const { user } = useContext(UserContext);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const city = query.get("city");
  const state = query.get("state");

  const [userBookmarks, setUserBookmarks] = useState([]);

  useEffect(() => {
    user && getUserBookmarks().then((data) => setUserBookmarks(data));
  }, []);

  return (
    <div>
      <StyledTrailList>
        <StyledTrailListHeader>
          {trails.length ? (
            <h3>
              Trails near {city}, {state}
            </h3>
          ) : (
            <h1>Search a location...</h1>
          )}
        </StyledTrailListHeader>
        {trails &&
          trails.map((trail, index) => (
            <TrailListCard
              key={index}
              trail={trail}
              userBookmarks={userBookmarks}
              setHoveredCard={setHoveredCard}
            />
          ))}
      </StyledTrailList>
    </div>
  );
};

export default TrailList;
