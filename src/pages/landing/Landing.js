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
      <sc.StyledImageContainer>
        {/* <svg
          viewBox="0 0 1440 416"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M385.668 202.879C455.268 243.623 522.66 316.652 592.068 360.945C690.936 424.081 793.896 427.895 892.608 362.418C988.536 298.942 1088 144.124 1182.79 65.4682C1266.85 -4.31339 1358.63 -33.0492 1440 54.14V416H0V312.725C122.959 166.009 256.336 128.021 385.668 202.879Z"
            fill="#DA6654"
            fill-opacity="1"
          />
          <path
            d="M385.668 202.879C455.268 243.623 522.66 316.652 592.068 360.945C690.936 424.081 793.896 427.895 892.608 362.418C988.536 298.942 1088 144.124 1182.79 65.4682C1266.85 -4.31339 1358.63 -33.0492 1440 54.14V416H0V312.725C122.959 166.009 256.336 128.021 385.668 202.879Z"
            fill="url(#paint0_radial)"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 208) rotate(-90) scale(208 720)"
            >
              <stop stop-color="#fffeff" stop-opacity="0.73" />
              <stop
                offset="0.0989583"
                stop-color="#fffeff"
                stop-opacity="0.5"
              />
              <stop offset="0.723958" stop-color="#fffeff" stop-opacity="0" />
              <stop offset="0.963542" stop-color="#fffeff" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg> */}
      </sc.StyledImageContainer>
    </sc.StyledLanding>
  );
};

export default Landing;
