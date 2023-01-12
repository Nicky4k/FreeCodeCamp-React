import React, { useEffect, useState } from "react";

const StarWars = () => {
  const [starsWarsData, setStarsWarsData] = useState({});
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${counter}`)
      .then((res) => res.json())
      .then((re) => setStarsWarsData(re));
  }, [counter]);

  function counterHandler(e) {
    setCounter(counter + 1);
  }

  return (
    <div className="starwars">
      {starsWarsData.name}
      <br />
      <br />
      <button onClick={counterHandler}>New</button>
    </div>
  );
};

export default StarWars;
