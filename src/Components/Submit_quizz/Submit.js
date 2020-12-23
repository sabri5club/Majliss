import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Submit.css";

export default function Submit() {
  return (
    <>
      <div className="mef-title">
        <h3 className="text-center">Proposez une question !</h3>
      </div>
      <div className="row">
        <div className="col-sm-12 ">
          <div className="col d-flex justify-content-center">
            <div className=" text-center">
              <Form>
                <Form.Group controlId="text">
                  <Form.Label>Question</Form.Label>
                  <Form.Control
                    className="mef-placeholder"
                    type="text"
                    placeholder="Entrer votre nom"
                  />
                </Form.Group>
                <div>
                  <h6>Choisissez une catégorie</h6>
                  <select>
                    <option value="grapefruit">Prière</option>
                    <option value="lime">Coran</option>
                    <option value="coconut">Prophète</option>
                    <option value="mango">Ramadan</option>
                  </select>
                </div>

                <Form.Group controlId="text">
                  <Form.Label>Proposition 1</Form.Label>
                  <Form.Control
                    className="mef-placeholder"
                    type="text"
                    placeholder="Proposition"
                  />
                </Form.Group>
                <Form.Group controlId="text">
                  <Form.Label>Proposition 2</Form.Label>
                  <Form.Control
                    className="mef-placeholder"
                    type="text"
                    placeholder="Proposition"
                  />
                </Form.Group>
                <Form.Group controlId="text">
                  <Form.Label>Proposition 3</Form.Label>
                  <Form.Control
                    className="mef-placeholder"
                    type="text"
                    placeholder="Proposition"
                  />
                </Form.Group>
                <Form.Group controlId="text">
                  <Form.Label>Proposition 4</Form.Label>
                  <Form.Control
                    className="mef-placeholder"
                    type="text"
                    placeholder="Proposition"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="J'accepte les conditions d'utilisations"
                  />
                </Form.Group>
                <div className="mef-button-position">
                  <Button
                    onClick={(e) => e.prevent.default}
                    className="btn-primary"
                    type="submit"
                  >
                    Valider
                  </Button>
                </div>
              </Form>
              <span>
                <h6>Pas encore inscris?</h6>
                <p>S'inscrire ici</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
