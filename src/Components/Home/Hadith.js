import React, {useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import {Form, Col, Button, Modal} from 'react-bootstrap';

const Hadith = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [chapitre, setchapitre] = useState([
    "Introduction",
    "La Foi",
    "Purification",
    "Menstruations",
    "Prière",
    "Mosquées et endroits de prière",
    "Prière du voyageur et son abbréviation",
    "Vendredi",
    "Prières deux fetes",
    "Prière pour la sollicitaztion de la pluie",
    "Eclipses",
    "Funérailles",
    "Aumone légale",
    "Jeune",
    "Retraite spirituelle",
    "Pélerinage",
    "Mariage",
    "Allaitement",
    "Divorce",
    "Anathène",
    "Affranchissement",
    "Ventes",
    "Irrigation",
    "Successions",
    "Donations",
    "Testaments",
    "Voeux",
    "Serments",
    "Serments collectifs \, belligérants [...]",
    "Peines légales"
  ])

  const [data, setData] = useState([]);
  const [value, setValue] = useState("")
  const [hadith, sethadith] = useState({
    french_version: "",
    arab_version: "",
    narrator: "",
    source: "",
    chapter_french: "",
    number: null
  });

  // const handleComment = (e) => {
  //   Setcomment(e.target.value);
  // };
  const sendHadith = () => {
    axios.post("https://tranquil-citadel-82505.herokuapp.com/api/hadith", hadith).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(hadith);

    //   const hadithObject = {
    //     description : "D’après Abû Mâlik Al-Ash’arî (Qu’Allah l’agrée) rapporte que le Messager d’Allah (ﷺ) a dit : « La purification représente la moitié de la foi ; dire « Louange à Allah » remplit la balance ; « Gloire à Allah et louange à Allah » remplit l’espace entre le ciel et la terre ; la prière est une lumière; l’aumône est une preuve (de foi sincère); la patience est une clarté; le Coran est une preuve pour ou contre toi ; tout homme fait, chaque matin, le commerce de son âme : il l’affranchit ou la conduit à sa perte. »",
    //      narrator: "Abu hureyra",
    //      source: "Sahih Muslim",
    //      chapter: "La purification",
    //      number: 350
    // }

    axios.get("https://tranquil-citadel-82505.herokuapp.com/api/hadith").then((res) => {
      console.log(res.data);
      setData(res.data);
    }).catch((error) => {
      console.log(error);
    });

    setShow(false)
    sethadith("");
  };
  return (<> < div className = "row justify-content-center" > <h2>Sahih Muslim</h2>
  <p>{hadith.description}</p>
</div>
<div className="row justify-content-center">
  <Form>
    <Form.Row>
      <Col>
        <Form.Control onChange={(e) => setValue(e.target.value)} placeholder="Le hadith recherché"/>
      </Col>
    </Form.Row>
  </Form>
  <Button variant="secondary ml-2 " onClick={() => setShow(true)}>Ajouter un hadith
  </Button>
    {' '} < Button variant = "success ml-2" onClick = {
    (e) => onSubmit(e)
  } > Afficher les hadiths de la bdd < /Button>{' '}
    </div > {
    show
      ? <div>
          <Modal.Dialog show={show.toString()}>
            <Modal.Header onClick={handleClose} closeButton="closeButton">
              <Modal.Title>Ajouter un nouveau hadith</Modal.Title>
            </Modal.Header>

            <Modal.Body>

              <Form>

                <Form.Group controlId="formGroupHadithFr">
                  <Form.Label>Hadith en francais</Form.Label>
                  <Form.Control onChange={(e) => sethadith({
                      ...hadith,
                      french_version: e.target.value
                    })} as="textarea" rows={5} placeholder="Ecrire un hadith ..."/>

                </Form.Group>
                <Form.Group controlId="formGroupHadithFr">
                  <Form.Label>Hadith en arabe</Form.Label>
                  <Form.Control onChange={(e) => sethadith({
                      ...hadith,
                      arab_version: e.target.value
                    })} as="textarea" rows={5} placeholder="Ecrire un hadith ..."/>

                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Rapporteur</Form.Label>
                  <Form.Control onChange={(e) => sethadith({
                      ...hadith,
                      narrator: e.target.value
                    })} as="select" defaultValue="Choisir...">
                    <option>Choisir une option</option>
                    <option>Rapporté par Muslim</option>
                    <option>Rapporté par Bukhari</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Livre</Form.Label>
                  <Form.Control onChange={(e) => sethadith({
                      ...hadith,
                      source: e.target.value
                    })} as="select" defaultValue="Choisir...">
                    <option>Choisir une option</option>
                    <option>Sahih Muslim</option>
                    <option>Sahih Bukhari</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupChapitre">
                  <Form.Label>Chapitre</Form.Label>
                  <Form.Control onChange={(e) => sethadith({
                      ...hadith,
                      chapter_french: e.target.value
                    })} as="select" defaultValue="Choisir...">
                    {chapitre.map((item, index) => <option key={index}>{item}</option>)}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Numéro</Form.Label>
                  <Form.Control onChange={(e) => sethadith({
                      ...hadith,
                      number: e.target.value
                    })} type="number" placeholder="Numero du hadith"/>
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Fermer</Button>
              <Button variant="primary" onClick={sendHadith}>Valider</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      : null
  } < div className = "row d-flex justify-content-center" > <div className="col-12  d-flex align-items-center text-center flex-column">

    {
      data.filter((item) => item.french_version.toLowerCase().includes(value)).map((item, idx) => <div key={idx} style={{
          marginTop: 50,
          backgroundColor: "rgb(239, 244, 243)",
          color: "rgb(103, 114, 112)",
          width: '40vw',
          padding: 20
        }}>
        <p>Chapitre : {item.chapter_french}</p>
        <p>{item.french_version}</p>
        <div className="row">
          <div className="col-6">
            <p>Livre : {item.source}</p>
          </div>

          <div className="col-6">
            <p>Numéro hadith : {item.number}</p>
          </div>
        </div>

      </div>)
    }

  </div>
</div>

</>)
}

export default Hadith
