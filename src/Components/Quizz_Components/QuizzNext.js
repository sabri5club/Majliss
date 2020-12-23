import React from "react";
export default function QuizzNext(props) {
  return (
    <>
      <div onClick={props.boxNext} className="row">
        <div className="col-sm-6 col-md-12 d-flex justify-content-center ">
          <div className="mef-next">
            <p>
              {props.index === props.Quizzdata.length - 1 ||
              props.heart.length === 0
                ? "Terminer le Quizz "
                : "Passez à la question suivante"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
