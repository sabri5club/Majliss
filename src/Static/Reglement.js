import React from "react";
import "./TextDisplay.css";

export default function Reglement() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="mef1-reglement">
              <h4>Fonctionnement de Quizz islam</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex col-sm-12 justify-content-center">
            <div className="mef2-reglement">
              <p>
                - Il y a plusieurs catégories de question ( Prière, Jeune,
                Ramadan, Coran etc)
              </p>
            </div>
          </div>
          <div className="col d-flex col-sm-12 justify-content-center">
            <div className="mef2-reglement">
              <p>
                - Il y a quatre propositions par question, mais une seule bonne
                réponse
              </p>
            </div>
          </div>
          <div className="col d-flex col-sm-12 justify-content-center">
            <div className="mef2-reglement">
              <p>
                - A la fin de chaque question vous aurez le détail de chaque
                bonne réponse
              </p>
            </div>
          </div>
          <div className="col d-flex col-sm-12 justify-content-center">
            <div className="mef2-reglement">
              <p>
                - Quatre niveau de difficulté : Débutant, Simple, Moyen ,
                Difficile, Très difficile
              </p>
            </div>
          </div>
          <div className="col d-flex col-sm-12 justify-content-center">
            <div className="mef2-reglement">
              <p>
                - Un score vous est attribué par Catégorie de question, une
                bonne réponse vous donne 1 points, 1 mauvaise vous retire un
                coeur
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
