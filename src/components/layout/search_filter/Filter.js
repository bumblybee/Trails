import React, { useContext } from "react";
import "react-dropdown/style.css";
import { StyledFilter } from "./StyledFilter";
import { SearchContext } from "../../../context/search/SearchContext";

const options = ["hiking", "biking", "none"];

const Filter = () => {
  const { setSearchFilterValue } = useContext(SearchContext);

  const handleSelect = (option) => {
    setSearchFilterValue(option.value);
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
