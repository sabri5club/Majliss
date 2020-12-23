import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Connexion.css";

export default function Connexion() {
  return (
    <div>
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
                <Form>
                  <Form.Group controlId="text">
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control
                      className="mef-placeholder"
                      type="text"
                      placeholder="Entrer votre nom"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      className="mef-placeholder"
                      type="password"
                      placeholder="Mot de passe"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="J'accepte les conditions d'utilisations"
                    />
                  </Form.Group>
                  <div className="mef-button-position">
                    <Button className="btn-primary" type="submit">
                      Valider
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
