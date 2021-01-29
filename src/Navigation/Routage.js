import React from "react";
import Reglement from "../Static/Reglement";
import Conditions from "../Static/Conditions";
import Accueil from "../Components/Home/Accueil";
import Hadith from "../Components/Home/Hadith";
import Connexion from "../Components/Register/Connexion";
import Inscription from "../Components/Register/Inscription";
import Header from "./Header";
import Footer from "./Footer";
import Categorie from "../Components/Home/Categorie";
import Quizz from "../Components/Quizz_Components/Quizz";
import Submit from "../Components/Submit_quizz/Submit";
import Coran from "../Components/Home/Coran";
import generalRank from "../Components/Ranking/generalRank";
import Profil from "../Components/Profil/Profil";
import SearchBar from "../Components/SearchQuran/SearchBar";
import { Router, Route } from "react-router-dom";
import history from "./History";
import QuizzConfig from "../Components/Quizz_Components/QuizzConfig";
import Library from "../Components/Home/Library";
import Citation from "../Components/Home/Citation";
import Prophete from "../Components/Home/Prophete";

export default function Routage() {
  return (
    <Router history={history}>
      <div>
        <Header/>
        <Route path="/" exact component={Accueil}></Route>
        <Route path="/Accueil" exact component={Accueil}></Route>
        <Route path="/Connexion" exact component={Connexion}></Route>
        <Route path="/Inscription" component={Inscription}></Route>
        <Route path="/Categorie" component={Categorie}></Route>
        <Route path="/Search" component={SearchBar}></Route>
        <Route path="/Coran" component={Coran}></Route>
        <Route path="/QuizzConfig" component={QuizzConfig}></Route>
        <Route path="/Quizz" component={Quizz}></Route>
        <Route path="/Submit" component={Submit}></Route>
        <Route path="/generalRank" component={generalRank}></Route>
        <Route path="/Profil" component={Profil}></Route>
        <Route path="/Reglement" component={Reglement}></Route>
          <Route path="/Conditions" component={Conditions}></Route>
        <Route path="/Library" component={Library}></Route>
        <Route path="/Hadith" component={Hadith}></Route>
        <Route path="/Citation" component={Citation}></Route>
        <Route path="/Prophete" component={Prophete}></Route>
        <Footer/>
      </div>
    </Router>
  );
}
