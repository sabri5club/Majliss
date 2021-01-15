import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Submit.css";
import axios from "axios";
import QuizzQuestion from "../Quizz_Components/QuizzQuestion";
import QuizzAnswer from "../Quizz_Components/QuizzAnswer";

export default function Submit() {
  const [Question, setQuestion] = useState("");
  const [Propositions, setPropositions] = useState([]);
  const [Explanation, setExplanation] = useState("");
  const [Category, setCategory] = useState("");
  const [Quizz, setQuizz] = useState({
    title: "",
    explanation: "",
    category: "",
    author: "",
    source: "",
    propositions: [],
  });

  const proposition1 = React.createRef();
  const proposition2 = React.createRef();
  const proposition3 = React.createRef();
  const proposition4 = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const copy = [...Propositions];
    copy.push({ first_answer: proposition1.current.value, correct: true });
    copy.push({ second_answer: proposition2.current.value, correct: false });
    copy.push({ third_answer: proposition3.current.value, correct: false });
    copy.push({ fourth_answer: proposition4.current.value, corect: false });

    // setPropositions(copy);
    console.log(copy);
    const copyQuizz = Quizz;
    copyQuizz.title = Question;
    copyQuizz.explanation = Explanation;
    copyQuizz.category = Category;
    copyQuizz.propositions = copy;
    setQuizz(copyQuizz);
    console.log(Quizz);

    axios
      .post("https://tranquil-citadel-82505.herokuapp.com/questions/", Quizz)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

      setQuestion("");
      setQuizz({
        title: "",
        explanation: "",
        propositions: [],
      });
      setExplanation("");
      setPropositions([]);
  };

  return (
    <>
      <div className="mef-title">
        <h3 className="text-center">Créer un Quizz!</h3>
      </div>
      <p>{Question}</p>
      <p>{Propositions}</p>
      <p>{Explanation}</p>
      <p>categorie : {Category}</p>
      <div className="row">
        <div className="col-6 d-flex justify-content-center ">
          <div style={{ width: 500 }} className="text-center">
            <Form>
              <Form.Group controlId="text">
                <Form.Label>Question</Form.Label>
                <Form.Control
                  as="textarea"
                  className="mef-placeholder"
                  type="text"
                  placeholder="Entrer votre Question"
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </Form.Group>
              <div>
                <h6>Choisissez une catégorie</h6>
                <select onChange={(e) => setCategory(e.target.value)}>
                  <option value=""></option>
                  <option value="Prière">Prière</option>
                  <option value="Coran">Coran</option>
                  <option value="Prophète">Prophète</option>
                  <option value="Ramadan">Ramadan</option>
                </select>
              </div>

              <Form.Group controlId="text">
                <Form.Label>Proposition 1 ( la bonne réponse) </Form.Label>
                <Form.Control
                  // onChange={(e) => AddProposition()}
                  className="mef-placeholder"
                  ref={proposition1}
                  type="text"
                  placeholder="Proposition"
                />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>Proposition 2</Form.Label>
                <Form.Control
                  // onChange={(e) => AddProposition()}
                  className="mef-placeholder"
                  type="text"
                  ref={proposition2}
                  placeholder="Proposition"
                />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>Proposition 3</Form.Label>
                <Form.Control
                  // onChange={(e) => AddProposition()}
                  className="mef-placeholder"
                  type="text"
                  ref={proposition3}
                  placeholder="Proposition"
                />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>Proposition 4</Form.Label>
                <Form.Control
                  // onChange={(e) => AddProposition()}
                  className="mef-placeholder"
                  type="text"
                  ref={proposition4}
                  placeholder="Proposition"
                />
              </Form.Group>

              <Form.Group controlId="text">
                <Form.Label>Explanation</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="mef-placeholder"
                  type="text"
                  placeholder="L'explication"
                  onChange={(e) => setExplanation(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="J'accepte les conditions d'utilisations"
                />
              </Form.Group>
              <div className="mef-button-position">
                <Button onClick={(e) => onSubmit(e)} className="btn-primary">
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
        <div className="col-6>">
          {/* <QuizzQuestion question={Question} categorie={Category} />
          <QuizzAnswer data={Propositions} couleur={[]} /> */}
        </div>
      </div>
    </>
  );
}
