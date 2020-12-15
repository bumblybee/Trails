import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import {
  StyledProgressContainer,
  StyledProgressBar,
} from "../../pages/scout/StyledProgress";

const Progress = ({ progress }) => {
  return (
    <StyledProgressContainer>
      <CircularProgressbarWithChildren
        styles={buildStyles({
          pathColor: `rgba(254, 119, 98, ${progress / 100})`,
          textColor: "#fff",
          trailColor: "#eceeed",
        })}
        value={progress}
        text={`${progress}%`}
      >
        <h4>Uploading Trail</h4>
      </CircularProgressbarWithChildren>
    </StyledProgressContainer>
  );
};

export default Progress;
