import React from "react";
import Searchbar from "../../components/layout/Searchbar";
import * as sc from "./StyledLanding";

//TODO: add cards at bottom - break into separate component
//TODO: Disable button if no search and enter to search
const Landing = () => {
  return (
    <div>
      <sc.StyledLanding>
        <sc.StyledLandingContainer>
          <sc.StyledLandingContent>
            <sc.StyledLandingText>
              <h1>Lorem ipsum dolor sit consectetur.</h1>
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
          <h1 style={{ color: "#fff", marginBottom: "2rem" }}>
            Popular Trails
          </h1>
          <div
            style={{
              width: "65%",
              display: "flex",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                borderRadius: "6px",
                background: "#fff",
                padding: "1rem",
                width: "250px",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>card title</h3>
              <p>card body</p>
            </div>
            <div
              style={{
                borderRadius: "6px",
                background: "#fff",
                padding: "1rem",
                width: "250px",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>card title</h3>
              <p>card body</p>
            </div>
            <div
              style={{
                borderRadius: "6px",
                background: "#fff",
                padding: "1rem",
                width: "250px",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>card title</h3>
              <p>card body</p>
            </div>
          </div>
        </sc.StyledCardContainer>
      </sc.StyledLanding>
    </div>
  );
};

export default Landing;
