import React from "react";
import history from "../../Navigation/History";
import "./Accueil.css";

function Accueil() {
  function onNavigateQuizz() {
    history.push("/Quizz");
  }

  function onNavigateQuizzConfig() {
    history.push("/QuizzConfig");
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className=" col-12 d-flex flex-column majliss-title">
          <h1>Bienvenue sur Lovemydin</h1>
          <p>Apprenez l'islam à travers plusieurs thématiques !</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="text-center majliss-subtitle">
          <h3>
          Choisissez entre le mode entrainement ou le mode standard avec classement générale !
          </h3>
        </div>
      </div>
      <div className="row justify-content-around ">
        <div className=" col d-flex text-center justify-content-end">
          <button onClick={onNavigateQuizzConfig} className="btn-accueil">
            <p className="mef-p">Entrainement Quizz</p>
          </button>
        </div>
        <div className=" col d-flex text-center">
          <button onClick={onNavigateQuizz} className="btn-accueil">
            <p className="mef-p">Mode standard</p>
          </button>
        </div>
              </div>


            {/*

        <div className="mef-btn-position col d-flex justify-content-center">
          <button onClick={onNavigateQuizz} className="btn-accueil">
            <p className="mef-p">Survivor Quizz</p>
          </button>
        </div>
          */}


    </>
  );
}

export default Accueil;
