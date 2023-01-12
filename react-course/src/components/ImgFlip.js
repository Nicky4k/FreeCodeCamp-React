import React, { useEffect, useState } from "react";

const ImgFlip = () => {
  const [memes, setMemes] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(function () {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((op) => setMemes(op.data.memes));
  }, []);

  function generateNewMemeHandler() {
    setCount(Math.floor(Math.random() * 100));
  }

  return (
    <div className="imgFlip">
      {memes.length && (
        <img
          style={{ height: "10rem", width: "10rem", objectFit: "contain" }}
          src={memes[count].url}
          alt=""
        />
      )}
      <br />
      <br />
      <button onClick={generateNewMemeHandler}>Get Memes</button>
    </div>
  );
};

export default ImgFlip;
