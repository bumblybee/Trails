import React, { useContext } from "react";
import TrailCard from "./TrailCard";
import { SearchContext } from "../../../context/search/SearchContext";
import { StyledCardList } from "./StyledTrailList";

const TrailList = () => {
  const { trails } = useContext(SearchContext);

  return (
    <StyledCardList>
      {trails &&
        trails.map((trail, index) => <TrailCard key={index} trail={trail} />)}
    </StyledCardList>
  );
};

export default TrailList;
