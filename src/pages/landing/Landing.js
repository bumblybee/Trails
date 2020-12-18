import React from "react";
import Searchbar from "../../components/layout/Searchbar";
import * as sc from "./StyledLanding";

//TODO: add cards at bottom
//TODO: Disable button if no search
const Landing = () => {
  return (
    <sc.StyledLanding>
      <sc.StyledLandingContainer>
        <sc.StyledLandingContent>
          <sc.StyledLandingText>
            <h1>Lorem ipsum dolor sit consectetur.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ad.
              Inven voluptatibus ea minus libero recusandae consectetur, i non!
            </p>
          </sc.StyledLandingText>
          <Searchbar />
        </sc.StyledLandingContent>
      </sc.StyledLandingContainer>
      <sc.StyledImageContainer></sc.StyledImageContainer>
    </sc.StyledLanding>
  );
};

export default Landing;
