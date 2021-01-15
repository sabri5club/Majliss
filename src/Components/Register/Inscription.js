import React, { useState } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import "./Inscription.css";
import axios from "axios";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from 'prop-types';
import Alert from '../Layout/Alert';


const Inscription = ({setAlert, register, isAuthenticated}) => {
  const [Pseudo, setPseudo] = useState("");
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [validated, setValidated] = useState(false);

  const onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);



    const userObject = {
      pseudo: Pseudo,
      name: Nom,
      firstname: Prenom,
      email: Email,
      password: Password,
    };

    console.log(userObject);

    register({userObject});

  //   axios
  //     .post("http://localhost:8081/users/", userObject)
  //     .then((res) => {
  //       console.log(res.data);
  //         setAlert("Envois d'un utilisateur", "danger");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  };

  if(isAuthenticated){
    return
    <Redirect to="/Accueil"/>
  }

  return (
    <div>
      <Alert/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="mef-title">
              <h2>Inscription</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col d-flex justify-content-center">
              <div className=" text-center">
                <Form noValidate validated={validated}>
                  <Form.Group controlId="text-pseudo ">
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control
                      onChange={(e) => setPseudo(e.target.value)}
                      className="mef-placeholder"
                      type="text"
                      placeholder="Choisissez un pseudo"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="text-nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      onChange={(e) => setNom(e.target.value)}
                      className="mef-placeholder"
                      type="text"
                      placeholder="Entrer votre Nom"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="text-prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                      onChange={(e) => setPrenom(e.target.value)}
                      className="mef-placeholder"
                      type="text"
                      placeholder="Entrer votre prénom"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control
                      onChange={(e) => setEmail(e.target.value)}
                      className="mef-placeholder"
                      type="email"
                      placeholder="Entrer votre email"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      className="mef-placeholder"
                      type="password"
                      placeholder="Mot de passe"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="J'accepte les conditions d'utilisations"
                      required
                    />
                  </Form.Group>
                  <div className="mef-button-position">
                    <Button
                      onClick={(e) => onSubmit(e)}
                      className="btn-primary"
                    >
                      Valider
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Inscription.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};




const mapStateToProps = state => ({
isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { setAlert, register })(Inscription);
