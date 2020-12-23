import React, { Component } from "react";
// import { Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import history from "../../Navigation/History";
import "./Accueil.css";

export default class Accueil extends Component {
  onNavigateQuizz() {
    history.push("/Quizz");
  }

  onNavigateQuizzConfig() {
    history.push("/QuizzConfig");
  }

  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="majliss-title">
            <h1>Bienvenue sur Majliss</h1>
            <p>Apprenez l'islam à travers plusieurs thématiques !</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="text-center majliss-subtitle">
            <h3>
              Pour Ajouter une question choisissez la catégorie, puis titre de
              la question, puis 4 réponses possibles!
            </h3>
          </div>
        </div>
        <div className="row btn-home">
          <div className="mef-btn-position col d-flex justify-content-center">
            <button
              onClick={this.onNavigateQuizzConfig}
              className="btn-accueil"
            >
              <p className="mef-p">Training Quizz</p>
            </button>
          </div>
          <div className="mef-btn-position col d-flex justify-content-center">
            <button onClick={this.onNavigateQuizz} className="btn-accueil">
              <p className="mef-p">Quizz Community</p>
            </button>
          </div>

          <div className="mef-btn-position col d-flex justify-content-center">
            <button onClick={this.onNavigateQuizz} className="btn-accueil">
              <p className="mef-p">Survivor Quizz</p>
            </button>
          </div>
        </div>
      </>
    );
  }
}
