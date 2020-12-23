import React, { useEffect } from "react";
import { FaMedal, FaHeartBroken } from "react-icons/fa";
import { IconContext } from "react-icons";
import firebase from "../../firebase";

export default function QuizzFinish(props) {
  let message = "";
  const pourcentage = Math.round((props.score * 100) / (props.length * 5));
  switch (true) {
    case pourcentage < 30:
      message = "Quizz échoué";
      break;
    case pourcentage > 30 && pourcentage < 50:
      message = "C'est moyen";
      break;
    case pourcentage > 50 && pourcentage < 75:
      message = "Pas mal";
      break;
    case pourcentage > 75:
      message = "Félicitation";
      break;
    default:
      message = "Bien joué";
  }

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   db.collection("Joueurs").add({
  //     Nom: props.name,
  //     Score: props.score,
  //     Categorie: "Générale",
  //     Niveau: 55,
  //   });
  // }, [props.name, props.score]);

  return (
    <>
      {props.name}
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
              <h2>{message}</h2>
            </div>
          </div>
          <div className="row">
            <div className=" col-sm-12 col-md-12 text-center ">
              <h2>
                Votre score finale est de :
                <span style={{ color: "rgb(75, 119, 78)" }}>
                  {" " + props.score}
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className=" col-sm-12 col-md-12  text-center">
              <h2>
                <span style={{ color: "rgb(75, 119, 78)" }}>
                  {pourcentage} % Bonne réponse
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 d-inline-flex  text-center justify-content-center">
              <p style={{ margin: 5 }}>
                <span style={{ color: "green" }}>6</span> correct
              </p>

              <p style={{ margin: 5 }}>
                <span style={{ color: "red" }}>7</span> incorrect
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 d-inline-flex  text-center justify-content-center">
              <button
                style={{ margin: 5 }}
                className="btn btn-primary"
                onClick={props.restart}
              >
                Rejouer
              </button>

              <button
                style={{ margin: 5 }}
                className="btn btn-primary"
                onClick={props.restart}
              >
                Résumé
              </button>
            </div>
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
            <div className="col-sm-12 col-md-12 d-inline-flex  text-center justify-content-center">
              <p style={{ margin: 5 }}>
                <span style={{ color: "green" }}>6</span> correct
              </p>

              <p style={{ margin: 5 }}>
                <span style={{ color: "red" }}>7</span> incorrect
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 d-inline-flex  text-center justify-content-center">
              <button
                style={{ margin: 5 }}
                className="btn btn-primary"
                onClick={props.restart}
              >
                Rejouer
              </button>

              <button
                style={{ margin: 5 }}
                className="btn btn-primary"
                onClick={props.restart}
              >
                Résumé
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
