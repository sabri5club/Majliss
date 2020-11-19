import React from "react";
import { FaMedal, FaHeartBroken } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function QuizzFinish(props) {
  return (
    <>
      {props.heart > 1 ? (
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <IconContext.Provider
                value={{ color: "#DAA520", className: "mef-icon", size: 80 }}
              >
                <FaMedal />
              </IconContext.Provider>
            </div>
          </div>

          <div className="row">
            <div className=" col-sm-12 col-md-12 text-center">
              <h2>Félicitation !</h2>
            </div>
          </div>
          <div className="row">
            <div className=" col-sm-12 col-md-12 text-center ">
              <h2>
                Votre score finale est de :
                <span style={{ color: "rgb(75, 119, 78)" }}>{props.score}</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className=" col-sm-12 col-md-12  text-center">
              <h2>
                <span style={{ color: "rgb(75, 119, 78)" }}>
                  {Math.round((props.score * 100) / (props.length * 5))} % Bonne
                  réponse
                </span>
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 text-center">
            <button className="btn btn-primary" onClick={props.restart}>
              Rejouer ce Quizz
            </button>
          </div>
        </div>
      ) : (
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <IconContext.Provider
                value={{ color: "black", className: "mef-icon", size: 80 }}
              >
                <FaHeartBroken />
              </IconContext.Provider>
            </div>
          </div>
          <div className="row">
            <div className=" col-sm-12 col-md-12 text-center">
              <h2>Plus de vie !</h2>
            </div>
          </div>

          <div className="row">
            <div className=" col-sm-12 col-md-12 text-center ">
              <h2>
                Votre score finale est de :
                <span style={{ color: "rgb(75, 119, 78)" }}>{props.score}</span>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className=" col-sm-12 col-md-12  text-center">
              <h2>
                <span style={{ color: "rgb(75, 119, 78)" }}>
                  {Math.round((props.score * 100) / (props.length * 5))} % Bonne
                  réponse
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className=" col-sm-12 col-md-12 text-center">
              <button className="btn btn-primary" onClick={props.restart}>
                Ressayer le Quizz
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
