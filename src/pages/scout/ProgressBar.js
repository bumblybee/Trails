import React from "react";
import { StyledProgressContainer, StyledProgressBar } from "./StyledProgress";

const ProgressBar = ({ progress }) => {
  return (
    <StyledProgressContainer>
      <h2>Uploading...</h2>
      <StyledProgressBar progress={progress}>{progress}%</StyledProgressBar>
    </StyledProgressContainer>
  );
};

export default ProgressBar;
