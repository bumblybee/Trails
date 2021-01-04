import { useRef, useState, useEffect } from "react";

// // Usage
// function App() {
//   const [hoverRef, isHovered] = useHover();

//   return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
// }

// Hook
export function useHover(data) {
  const [value, setValue] = useState(null);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(data);
  const handleMouseOut = () => setValue({});

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}
