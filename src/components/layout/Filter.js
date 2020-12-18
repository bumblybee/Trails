import React, { useContext } from "react";
import "react-dropdown/style.css";
import { StyledFilter } from "./StyledFilter";
import { SearchContext } from "../../context/search/SearchContext";

const options = ["hiking", "biking", "none"];

const Filter = () => {
  const { setFilterValue } = useContext(SearchContext);

  const handleSelect = (option) => {
    setFilterValue(option.value);
    console.log(option.value);
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
