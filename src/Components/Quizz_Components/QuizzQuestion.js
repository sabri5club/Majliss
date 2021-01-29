import React from "react";

export default function QuizzQuestion(props) {
  return (
    <>
      <div className="mef-quest" style={{ width: 400 }}>
        <div
          className="col-12 text-center"
          style={{
            backgroundColor: "#85e0ce",
            color: "white",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            padding: 5,
          }}
        >
      
            <div>
              Question : {props.index + 1}/{props.length}
            </div>

        </div>
        <div
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "rgb(133, 224, 206)",
          }}
          className="col-12 text-center"
        >
          <div className="mef-title-quizz">
            <h5>{props.question}</h5>
            <div className="mef-cat-title">
              <p>{props.categorie}</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
