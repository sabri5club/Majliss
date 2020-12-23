import React from "react";
import "./Header.css";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "avataaars";

export default function Header() {
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12 text-center">
        <Navbar expand="lg" className=" mef-bg navbar-expand-md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to={"Accueil"} className="mef-navlink">
                Accueil
              </Link>
              <Link className="mef-navlink" to="/Categorie">
                Quizz Category
              </Link>
              <Link className="mef-navlink" to="/Library">
                Library
              </Link>
            </Nav>

            <Nav className="mef-login">
              {5 === 4 ? (
                <>
                  <Link className="mef-navlink" to="/Connexion">
                    Connexion
                  </Link>
                  <Link className="mef-navlink" to="/inscription">
                    Inscription
                  </Link>
                </>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "purple" }}
                    id="dropdown-basic"
                  >
                    <Avatar
                      style={{
                        height: 40,
                        width: 40,
                        backgroundColor: "white",
                        borderRadius: 30,
                      }}
                      s
                      avatarStyle="Transparent"
                      topType="ShortHairTheCaesar"
                      accessoriesType="Blank"
                      hatColor="Blue03"
                      clotheType="BlazerShirt"
                      eyeType="Default"
                      eyebrowType="Default"
                      mouthType="Default"
                      skinColor="Light"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="row ">
                      <div className="col-md-12 d-flex justify-content-center">
                        <Link className="mef-navlink-profile" to="/Profil">
                          Profile
                        </Link>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-12 d-flex justify-content-center">
                        <Link className="mef-navlink-profile" to="/Submit">
                          Create Quizz
                        </Link>
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col-md-12 d-flex justify-content-center">
                        <Link className="mef-navlink-profile" to="/generalRank">
                          Ranking
                        </Link>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-12 d-flex justify-content-center">
                        <Link className="mef-navlink-profile" to="/Reglement">
                          News
                        </Link>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-12 d-flex justify-content-center">
                        <Link className="mef-navlink-profile" to="/Reglement">
                          Contact us
                        </Link>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
