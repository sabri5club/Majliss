import React, { useState } from "react";
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  // const [show, setShow] = useState("");
  // const toggle = () =>setShow("collapsed");
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <Navbar expand="lg" className=" mef-bg navbar-expand-md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to={"Accueil"} className="mef-navlink">
                Accueil
              </Link>
              <Link className="mef-navlink" to="/Categorie">
                Catégorie
              </Link>
              <Link className="mef-navlink" to="/Apprentissage">
                Apprentissage
              </Link>
              <Link className="mef-navlink" to="/regle_du_jeu">
                Règlement
              </Link>
              <Link className="mef-navlink" to="/generalRank">
                Classement
              </Link>
            </Nav>

            <Nav className="mr-auto-md">
              <Link className="mef-navlink" to="/Connexion">
                Connexion
              </Link>
              <Link className="mef-navlink" to="/inscription">
                Inscription
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
