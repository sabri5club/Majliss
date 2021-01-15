import React from "react";
import { FaAngleRight } from "react-icons/fa";
export default function QuizzNext(props) {
  return (
    <>
      <div className="row ">
        <div onClick={props.boxNext} className="col-12  ">
          <div style={{ maxWidth: 160 }} className=" mef-next ">
            <div className="row">
              <p style={{ paddingLeft: 10, margin: 8 }}>
                {props.index === props.Quizzdata.length - 1 ||
                props.heart.length === 0
                  ? "Terminer le Quizz "
                  : "Prochaine question"}
              </p>
              <div style={{ marginTop: 8 }}>
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
