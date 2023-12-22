import { useState } from "react";
import "./Test.css";

const Test = () => {
  const [response, setResponse] = useState("");
  const [leftStyle, setLeftStyle] = useState(null);
  const [topStyle, setTopStyle] = useState(null);

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
      <div className="header">
        {response === "yes" ? (
          <h1>Yipeeeee</h1>
        ) : (
          <h1>Do you wanna go out with me?</h1>
        )}
      </div>
      <div className="gif">
        {response === "yes" ? (
          <img
            src="https://media.giphy.com/media/PtGsNIfHKioAMMa77H/giphy.gif"
            alt="please"
          />
        ) : (
          <img
            src="https://media.giphy.com/media/qA9BnxUPmgWgU/giphy.gif"
            alt="please"
          />
        )}
      </div>
      {response !== "yes" && (
        <div className="buttons-container">
          <button className="btn" id="yes" onClick={() => setResponse("yes")}>
            Yes
          </button>
          <button
            className="btn no-button"
            onClick={handleButtonClick}
            id="no"
            style={{
              top: topStyle,
              left: leftStyle,
              transition: "0.5s",
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
