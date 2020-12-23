import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Inscription.css";

export default function Inscription() {
  return (
    <div>
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
                <Form>
                  <Form.Group controlId="text-pseudo ">
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control
                      className="mef-placeholder"
                      type="text"
                      placeholder="Choisissez un pseudo"
                    />
                  </Form.Group>
                  <Form.Group controlId="text-nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      className="mef-placeholder"
                      type="text"
                      placeholder="Entrer votre Nom"
                    />
                  </Form.Group>
                  <Form.Group controlId="text-prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control
                      className="mef-placeholder"
                      type="text"
                      placeholder="Entrer votre prénom"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control
                      className="mef-placeholder"
                      type="email"
                      placeholder="Entrer votre email"
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
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
