import { useState } from "react";
import "./Test.css";

const Test = () => {
  const [leftStyle, setLeftStyle] = useState(0);
  const [topStyle, setTopStyle] = useState(0);

  const handleButtonClick = () => {
    const button = document.getElementById("no");

    if (button) {
      const newTop = Math.random() * (window.innerHeight - button.offsetHeight);
      const newLeft = Math.random() * (window.innerWidth - button.offsetWidth);

      const clampedTop = Math.max(
        0,
        Math.min(window.innerHeight - button.offsetHeight, newTop)
      );
      const clampedLeft = Math.max(
        0,
        Math.min(window.innerWidth - button.offsetWidth, newLeft)
      );

      setTopStyle(`${clampedTop}px`);
      setLeftStyle(`${clampedLeft}px`);
    }
  };

  return (
    <div className="test-container">
      <button
        className="move-button"
        onClick={handleButtonClick}
        id="no"
        style={{
          position: "absolute",
          top: topStyle,
          left: leftStyle,
          transition: "0.5s",
        }}
      >
        Move me
      </button>
    </div>
  );
};

export default Test;
