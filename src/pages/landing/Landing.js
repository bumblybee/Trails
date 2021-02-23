import React, { useState, useContext, useEffect } from "react";
import { BookmarkContext } from "../../context/bookmark/BookmarkContext";
import Searchbar from "./components/Searchbar";
import TrailCard from "../../components/layout/cards/TrailCard";

import * as sc from "./StyledLanding";

// TODO: add cards at bottom - break into separate component
// TODO: Image own element, not background

const Landing = () => {
  const { latestBookmarks } = useContext(BookmarkContext);
  const [popularBookmarks, setPopularBookmarks] = useState([]);

  useEffect(() => {
    latestBookmarks && setPopularBookmarks(latestBookmarks);
  });

  console.log(popularBookmarks);
  return (
    <div>
      <sc.StyledLanding>
        <sc.StyledLandingContainer>
          <sc.StyledLandingContent>
            <sc.StyledLandingText>
              <h1>Choose your own adventure.</h1>
              <p>
                We never known where this journey ends and the next begins. When
                you come to a fork in the road, take it.
              </p>
            </sc.StyledLandingText>
            <Searchbar />
          </sc.StyledLandingContent>
        </sc.StyledLandingContainer>
        {/* TODO: Break into own component */}
        <sc.StyledLandingBottomContainer>
          <div>
            <h3>Recently discovered</h3>
            <sc.StyledLandingCardContainer>
              {popularBookmarks &&
                popularBookmarks.map((bookmark) => (
                  <TrailCard key={bookmark.id} trail={bookmark.trail} />
                ))}
            </sc.StyledLandingCardContainer>
          </div>
        </sc.StyledLandingBottomContainer>
      </sc.StyledLanding>
    </div>
  );
};

export default Landing;
