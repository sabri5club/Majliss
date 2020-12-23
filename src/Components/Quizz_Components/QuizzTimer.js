import React, { useState, useEffect } from "react";

function ProgressBar({
  percentage,
  percentageUpdate,
  index,
  data,
  percentageIncrease,
  Explanation,
}) {
  const [count, setCount] = useState(percentage);
  const [color, SetColor] = useState("green");

  useEffect(() => {
    if (count < 50) {
      SetColor("rgb(199, 199, 232)");
    } else if (count === 50) {
      SetColor("rgb(224,146,0)");
    } else if (count > 79) {
      SetColor("rgb(191,49,49)");
    }
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (percentage < 100 && Explanation === false) {
        setCount(percentage);
        percentageIncrease();
      } else if (percentage === 100 && index <= data - 1) {
        percentageUpdate();
        setCount(percentage);
        clearInterval(timer);
      }
    }, 300);
    return () => clearInterval(timer);
  }, [
    index,
    data,
    percentageUpdate,
    percentage,
    percentageIncrease,
    Explanation,
  ]);

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
