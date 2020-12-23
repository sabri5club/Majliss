import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Quizz from "./Quizz";

export default function QuizzConfig() {
  const [start, setStart] = useState(false);
  const [nbQuestion, setNbQuestion] = useState(4);
  const [level, setLevel] = useState("0");
  const [categorie, setCategorie] = useState([]);
  const [checkbox, setCheckbox] = useState([false, false, false, false, false]);
  const [name, setName] = useState("");

  const AddCategorie = (theme, e) => {
    if (categorie.includes(theme)) {
      const index = categorie.indexOf(theme);
      const copy = [...categorie];
      copy.splice(index, 1);
      setCategorie(copy);
      setCheckbox(true);
    } else {
      setCategorie((categorie) => [...categorie, theme]);
      setCheckbox(e.target.checked);
    }
  };

  return (
    <div>
      {name.length > 3 && start === true ? (
        <div>
          {/* <h3>Vous pouvez ici configurez votre quizz</h3> */}
          <Quizz
            nombre={nbQuestion}
            level={level}
            categorie={"Le coran"}
            name={name}
          />
        </div>
      ) : (
        <>
          {categorie}
          <div className="container">
            <div style={{ height: 500 }} className="row ">
              <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                <h6>
                  Pour commencer le Quizz merci de configurer les options
                  suivantes : la difficulté, le nombre de question (En cour de
                  développement ...)
                </h6>
              </div>

              <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Votre Pseudo :</Form.Label>
                    <Form.Control
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Entrer un pseudo"
                      required
                      value={name}
                    />
                  </Form.Group>
                

                  <Form.Group controlId="formNasicRange">
                    <Form.Label>
                      Nombre de série (10 questions par série)
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setNbQuestion(e.target.value)}
                      type="range"
                      min="0"
                      max="30"
                      step="5"
                      value={nbQuestion}
                      style={{ color: "purple" }}
                    />
                    <p>Questions : {nbQuestion}</p>
                  </Form.Group>

                  <Form.Label
                    className="my-1 mr-2"
                    htmlFor="inlineFormCustomSelectPref"
                  >
                    Difficulté
                  </Form.Label>
                  <Form.Control
                    onClick={(e) => setLevel(e.target.value)}
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                  >
                    <option value="0">Facile</option>
                    <option value="1">Moyen</option>
                    <option value="2">Intermédiaire</option>
                    <option value="3">Difficile</option>
                    <option value="4">Expert</option>
                  </Form.Control>
                  <p>Choix catégorie :</p>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        onClick={(e) => AddCategorie("Toutes", e)}
                        inline
                        label="Toutes"
                        type={type}
                        id={`inline-${type}-1`}
                        checked={checkbox[0]}
                      />
                      <Form.Check
                        onClick={(e) => AddCategorie("coran", e)}
                        inline
                        label="coran"
                        type={type}
                        id={`inline-${type}-2`}
                        checked={checkbox[1]}
                      />

                      <Form.Check
                        onClick={(e) => AddCategorie("ramadan", e)}
                        inline
                        label="ramadan"
                        type={type}
                        id={`inline-${type}-3`}
                        checked={checkbox[2]}
                      />
                      <Form.Check
                        onClick={(e) => AddCategorie("prières", e)}
                        inline
                        label="prière"
                        type={type}
                        id={`inline-${type}-4`}
                        checked={checkbox[3]}
                      />
                    </div>
                  ))}
                </Form>
              </div>
              <div className="col-12 col-md-12 d-flex justify-content-center align-items-start">
                <button
                  onClick={() => setStart(name.length > 0 ? !start : false)}
                  className="btn btn-primary"
                >
                  Lancer mon Quizz
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
