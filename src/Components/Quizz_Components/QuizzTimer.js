import React, { useState, useEffect } from "react";

function ProgressBar({ percentage, percentageUpdate, index, data, restart }) {
  const [count, setCount] = useState(percentage);
  const [color, SetColor] = useState("green");

  useEffect(() => {
    if (count < 50) {
      SetColor("rgb(75, 119, 78)");
    } else if (count === 50) {
      SetColor("rgb(224,146,0)");
    } else if (count > 79) {
      SetColor("rgb(191,49,49)");
    }
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 100 && restart === false) {
        setCount((prevCount) => prevCount + 1);
      } else if (count === 100 && index <= data - 1) {
        percentageUpdate();
        setCount(0);
        clearInterval(timer);
      } else if (count < 100 && restart === true) {
        percentageUpdate();
        setCount(0);
      }
    }, 300);
    return () => clearInterval(timer);
  }, [count, index, data, percentageUpdate]);

  return (
    <div className="progress-bar">
      <Filler color={color} percentage={count} />
    </div>
  );
}

const Filler = (props) => {
  return (
    <div
      className="filler"
      style={{
        backgroundColor: `${props.color}`,
        width: `${props.percentage}%`,
      }}
    />
  );
};

export { ProgressBar, Filler };
