import React, { useEffect, useState } from "react";

const WindowWidth = () => {
  const [dimensions, setDimensions] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    function resizeHandler() {
      console.log("init");
      setDimensions({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    }
    window.addEventListener("resize", resizeHandler);

    return function () {
      console.log("removing memory leaks");
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="windowWidth">
      <h3>Height: {dimensions.innerHeight}</h3>
      <h3>Width: {dimensions.innerWidth}</h3>
    </div>
  );
};

export default WindowWidth;
