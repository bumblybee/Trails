import React, { useContext } from "react";
import "react-dropdown/style.css";
import { StyledFilter } from "./StyledFilter";
import { SearchContext } from "../../../context/search/SearchContext";

const options = ["hiking", "biking", "none"];
//TODO: might need to pass state from parent and update here to get filter val to be sent to api
const Filter = ({ origin }) => {
  const { setSearchFilterValue } = useContext(SearchContext);

  const handleSelect = (option) => {
    setSearchFilterValue(option.value);
    console.log(option.value);
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
