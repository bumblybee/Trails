import React, { useContext } from "react";
import ParkCard from "./ParkCard";
import { SearchContext } from "../../../context/search/SearchContext";
import { StyledCardList } from "./StyledParkList";

const ParkList = () => {
  const { campgrounds } = useContext(SearchContext);

  return (
    <StyledCardList>
      {campgrounds &&
        campgrounds.map((campground, index) => (
          <ParkCard campground={campground} />
        ))}
    </StyledCardList>
  );
};

export default ParkList;
