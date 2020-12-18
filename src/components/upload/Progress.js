import React, { useContext } from "react";
import { Circle } from "rc-progress";

import { StyledProgressContainer, StyledProgressText } from "./StyledProgress";

const Progress = ({ progress }) => {
  return (
    <StyledProgressContainer>
      <Circle
        percent={progress}
        strokeLinecap="round"
        strokeColor={{
          "0%": "#b1ce7c",
          "70%": "#fe7762",
          "100%": "#b1ce7c",
        }}
        strokeWidth="5"
        trailColor="#ffffff99"
        trailWidth="2"
      />
      <StyledProgressText>
        {typeof progress === "number" ? progress + "%" : progress}
      </StyledProgressText>
    </StyledProgressContainer>
  );
};

const progressStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
};
export default Progress;
