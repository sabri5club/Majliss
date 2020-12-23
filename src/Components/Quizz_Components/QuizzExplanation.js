import React from "react";
import { useSpring, animated } from "react-spring";

function QuizzExplanation(props) {
  const anim = useSpring({
    backgroundColor: "#22223A",
    color: "white",
    opacity: 0.8,
    zIndex: "1",
    from: { opacity: 0 },
    config: { duration: 2000 },
    marginTop: 30,
  });
  if (props.explanation.length > 0) {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-12 d-flex justify-content-center ">
          <animated.div style={anim}>
            <div style={{ margin: 25 }}>
              <p>{props.explanation}</p>
            </div>
          </animated.div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default QuizzExplanation;
