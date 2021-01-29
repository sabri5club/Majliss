import React from "react";
import "./Header.css";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "avataaars";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {logout} from '../actions/auth';

const Header = ({isAuthenticated , logout}) =>  {
  return (
    <div className="row d-flex justify-content-center">
      <div style={{ padding: 0 }} className="container-fluid">
        <Navbar
          style={{ width: "100%" }}
          expand="lg"
          className="mef-bg navbar navbar-expand-lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="mef-navlink" to="/Accueil">
                Accueil
              </Link>
              <Link className="mef-navlink" to="/Categorie">
                Quizz communauté
              </Link>
              <Link className="mef-navlink" to="/Library">
                Bibliothèque
              </Link>
            {/*
              <Link className="mef-navlink" to="/Library">
                Cours
              </Link>
              */}


            </Nav>

            <Nav className="mef-login">
              { (isAuthenticated === false || isAuthenticated === null) ? (
                <>
    {/*
                <Link style={{backgroundColor : "#FBFFBA", color: "#7D7D7D", borderRadius : 25}} className="mef-navlink" to="/Library">
                  Marketplace
                </Link>
                    */}

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

                    id="dropdown-basic"
                    className="btn-lmd2"

                  >

                    <Avatar
                      style={{
                        maxHeight: '4vmin',
                        maxWidth: '4vmin',
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
                      <div className="col-md-12 d-flex justify-content-center">
                        <Link onClick={logout} className="mef-navlink-profile" to="/Reglement">
                          Déconnexion
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

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {logout})(Header);
