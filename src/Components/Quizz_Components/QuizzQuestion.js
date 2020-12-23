import React from "react";

export default function QuizzQuestion(props) {
  return (
    <div className="container">
      <div className="row d-flex align-item-center">
        <div className="mef-quest col-sm-12 text-center">
          <div className="mef-title-quizz">
            <h5>{props.question}</h5>
            <div className="mef-cat-title">
              <p>{props.categorie}</p>
              {/* <p>
                {props.index + 1}/{props.length}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
