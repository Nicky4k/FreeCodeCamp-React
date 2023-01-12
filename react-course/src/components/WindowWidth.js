import React, { useEffect, useState } from "react";

const WindowWidth = () => {
  const [dimensions, setDimensions] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    });
  }, []);

  return (
    <div className="windowWidth">
      <h3>Height: {dimensions.innerHeight}</h3>
      <h3>Width: {dimensions.innerWidth}</h3>
    </div>
  );
};

export default WindowWidth;
