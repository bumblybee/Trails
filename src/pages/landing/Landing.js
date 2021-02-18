import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import TrailCard from "../../components/layout/cards/TrailCard";

import * as sc from "./StyledLanding";

// TODO: add cards at bottom - break into separate component
// TODO: Image own element, not background

const Landing = () => {
  const [popularTrails, setPopularTrails] = useState([]);

  return (
    <div>
      <sc.StyledLanding>
        <sc.StyledLandingContainer>
          <sc.StyledLandingContent>
            <sc.StyledLandingText>
              <h1>Choose Your Own Adventure.</h1>
              <p>
                We never known where this journey ends and the next begins. When
                you come to a fork in the road, take it.
              </p>
            </sc.StyledLandingText>
            <Searchbar />
          </sc.StyledLandingContent>
        </sc.StyledLandingContainer>
        {/* TODO: Break into own component */}
        <sc.StyledCardContainer>
          <div
            style={{
              width: "60%",
              margin: "0 auto",
            }}
          >
            <h3>Popular Trails</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* <TrailCard /> */}
            </div>
          </div>
        </sc.StyledCardContainer>
      </sc.StyledLanding>
    </div>
  );
};

export default Landing;
