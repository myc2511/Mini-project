import React, { useState } from "react";

function Trackorder() {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    // simulate progress update
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 1000);
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <div style={{ backgroundColor: "#f5f5f5", borderRadius: "10px", height: "20px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: `${progress}%`, borderRadius: "10px", backgroundImage: "linear-gradient(to right, #ff6b6b, #c44569)" }}></div>
      </div>
      <button style={{ marginTop: "20px" }} onClick={handleButtonClick}>Start Progress</button>
    </div>
  );
}

export default Trackorder;
