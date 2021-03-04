import React from "react";
import { StyledLoader, StyledLoaderContainer } from "./StyledLoader";

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <StyledLoader></StyledLoader>Loading...
    </StyledLoaderContainer>
  );
};

export default Loader;
