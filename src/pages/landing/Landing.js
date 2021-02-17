import React from "react";
import Searchbar from "./components/Searchbar";

import * as sc from "./StyledLanding";

// TODO: add cards at bottom - break into separate component
// TODO: Image own element, not background

const Landing = () => {
  return (
    <div>
      <sc.StyledLanding>
        <sc.StyledLandingContainer>
          <sc.StyledLandingContent>
            <sc.StyledLandingText>
              <h1>Choose your own adventure.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                ad. Inven voluptatibus ea minus libero recusandae consectetur, i
                non!
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
              <div
                style={{
                  borderRadius: "6px",
                  border: "1px solid #eceeed",
                  background: "#fff",
                  padding: "1rem",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ marginBottom: "0.5rem" }}>card title</h4>
                <p>card body</p>
              </div>
              <div
                style={{
                  borderRadius: "6px",
                  border: "1px solid #eceeed",
                  background: "#fff",
                  padding: "1rem",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ marginBottom: "0.5rem" }}>card title</h4>
                <p>card body</p>
              </div>
              <div
                style={{
                  borderRadius: "6px",
                  border: "1px solid #eceeed",
                  background: "#fff",
                  padding: "1rem",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ marginBottom: "0.5rem" }}>card title</h4>
                <p>card body</p>
              </div>
            </div>
          </div>
        </sc.StyledCardContainer>
      </sc.StyledLanding>
    </div>
  );
};

export default Landing;
