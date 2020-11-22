import React, { useState, useContext } from "react";
import "react-dropdown/style.css";
import { StyledFilter } from "./StyledFilter";
import { SearchContext } from "../../context/search/SearchContext";

const options = ["hiking", "biking"];

const Filter = () => {
  const { setFilterValue } = useContext(SearchContext);

  const handleSelect = (option) => {
    setFilterValue(option.value);
  };

  return (
    <StyledFilter
      options={options}
      placeholder="filter"
      onChange={handleSelect}
    />
  );
};

export default Filter;
