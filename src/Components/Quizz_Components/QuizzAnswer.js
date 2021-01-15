import React, { useEffect, useMemo, useState } from "react";
import { useSpring, animated } from "react-spring";
function QuizzAnswer(props) {
  const c2Style = {
    borderRadius: 20,
    marginTop: 35,
    padding: 8,
    cursor: "pointer",
  };
  const test = useSpring({
    opacity: 1,
    from: { opacity: 1, marginRight: 250, marginLeft: -250 },
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 25,

    config: { duration: 1000 },
  });

  const [letter] = useState(["A", "B", "C", "D"]);
  useEffect(() => {
    console.log(props.index);
  }, [props.index]);

  return (
    <div className="row">
      <div className="col-6">
        <div className="justify-content-center text-center">
          <animated.div style={test}>
            {props.data.map((quizz, idx) => (
              <div
                key={idx}
                style={{ ...c2Style, ...props.couleur[idx] }}

                onClick={() => props.clic(quizz)}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {letter[idx] + "."}
                  </span>
                  {" " + quizz.proposition}
                </p>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuizzAnswer);
