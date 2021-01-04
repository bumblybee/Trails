import React, { useState } from "react";
import { HoverContext } from "./HoverContext";

const HoverProvider = ({ children }) => {
  const [hovered, setHovered] = useState({});

  return (
    <HoverContext.Provider value={{ hovered, setHovered }}>
      {children}
    </HoverContext.Provider>
  );
};

export default HoverProvider;
