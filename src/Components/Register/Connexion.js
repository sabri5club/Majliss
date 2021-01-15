import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import { setAlert } from "../../actions/alert";
import axios from "axios";
import Alert from '../Layout/Alert';
import {connect} from 'react-redux';
import {connexion} from '../../actions/auth';
import PropTypes from 'prop-types';

import "./Connexion.css";


const Connexion = ({connexion, isAuthenticated}) => {

  const [Pseudo, setPseudo] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const onSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false ){
      e.preventDefault();
      e.stopPropagation();
    }else {

  setValidated(true);

console.log("test");


    const userObject = {
      pseudo: Pseudo,
      email: Email,
      password: password,
    };

console.log(userObject);
        connexion({userObject});

    // axios
    // .post("http://localhost:8081/users/", userObject)
    // .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    }

  };

  // Redirect if logged console.log(require('util').inspect(, { depth: null }));

  if(isAuthenticated){
    return <Redirect to="/Accueil"/>
  }

  return (

    <div>
        <Alert/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="mef-title">
              <h2>Connexion</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col d-flex justify-content-center">
              <div className=" text-center">
                <Form noValidate validated={validated}>
                  <Form.Group controlId="text">
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control
                      onChange={(e) => setPseudo(e.target.value)}
                      className="mef-placeholder"
                      type="text"
                      placeholder="Entrer votre nom"
                      required
                      />
                  </Form.Group>
                  <Form.Group controlId="text">
                    <Form.Label>Email</Form.Label>
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
                  <div className="mef-button-position">
                    <Button
                      onClick={(e) => onSubmit(e)}
                      className="btn-primary"
                    >
                      Connexion
                    </Button>
                  </div>
                  <span>
                    <h6>Pas encore inscris?</h6>
                    <p>S'inscrire ici</p>
                  </span>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Connexion.propTypes = {
  connexion: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {connexion})(Connexion);
