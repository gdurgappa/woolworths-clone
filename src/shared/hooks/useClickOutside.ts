import { useState, useEffect } from "react";
const useClickOutside = (ref) => {
  const [isOutSide, setIsOutSide] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      setIsOutSide(false);
    } else {
      setIsOutSide(true);
    }
  };
  return isOutSide;
};
export default useClickOutside;
