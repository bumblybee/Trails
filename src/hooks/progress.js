import { useState } from "react";

export const useProgress = (percentage) => {
  const [progress, setProgress] = useState(null);
  const updateProgress = () => setProgress(percentage);
  console.log(progress);
  return { progress, updateProgress };
};
