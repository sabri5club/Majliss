import React from "react";
import Reglement from "../TextDisplay/Reglement";
import Accueil from "../Components/Layout/Accueil";
import Connexion from "../Components/Layout/Connexion";
import Inscription from "../Components/Layout/Inscription";
import Header from "./Header";
import Categorie from "../Components/Layout/Categorie";
import Quizz from "../Components/Quizz";
import Submit from "../Components/Submit_quizz/Submit";
import Apprentissage from "../Components/Apprentissage";
import generalRank from "../Components/Ranking/generalRank";
import { Router, Route } from "react-router-dom";
import history from "./History";
import QuizzConfig from "../Components/Quizz_Components/QuizzConfig";

export default function Routage() {
  return (
    <Router history={history}>
      <div>
        <Header></Header>

        <Route path="/Accueil" exact component={Accueil}></Route>

        <Route path="/Connexion" exact component={Connexion}></Route>
        <Route path="/Inscription" component={Inscription}></Route>
        <Route path="/Categorie" component={Categorie}></Route>
        <Route path="/Apprentissage" component={Apprentissage}></Route>
        <Route path="/QuizzConfig" component={QuizzConfig}></Route>
        <Route path="/Quizz" component={Quizz}></Route>
        <Route path="/Submit" component={Submit}></Route>
        <Route path="/generalRank" component={generalRank}></Route>

        <Route path="/regle_du_jeu" component={Reglement}></Route>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}
