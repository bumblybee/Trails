import React from "react";
import Select from "react-select";
import { StyledFilter } from "./StyledFilter";

const Filter = () => {
  return (
    <StyledFilter>
      <option value="hiking">hiking</option>
      <option value="biking">biking</option>
      <option value="all">all</option>
    </StyledFilter>
  );
};

export default Filter;
