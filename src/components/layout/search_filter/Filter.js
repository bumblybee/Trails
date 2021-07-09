import React from "react";
import "react-dropdown/style.css";
import { StyledFilter } from "./StyledFilter";

const options = ["hiking", "biking", "none"];

const Filter = ({ origin, setSearchFilterValue }) => {
  const handleSelect = (option) => {
    let val = option.value;

    if (val === "none") val = null;

    setSearchFilterValue(val);
  };

  return (
    <StyledFilter
      origin={origin}
      options={options}
      placeholder="filter"
      onChange={handleSelect}
    />
  );
};

export default Filter;
