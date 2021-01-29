import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "avataaars";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { Form } from "react-bootstrap";

function QuizzCommentaires() {
  const [data, setData] = useState([]);
  const [comment, Setcomment] = useState("");

  // const handleComment = (e) => {
  //   Setcomment(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("test");

    const userObject = {
      title: "nieme commentaire",
      description: comment,
    };


    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios
      .post("https://tranquil-citadel-82505.herokuapp.com/commentaires", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://tranquil-citadel-82505.herokuapp.com/commentaires")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    Setcomment("");
  };

  return (
    <div className="row justify-content-center ">
      <div className="col-12 d-flex  align-items-center flex-column ">
        <div className="d-flex inline">
          <p style={{ fontSize: 20 }}>Commenter :</p>
          <Form.Control
            as="textarea"
            rows={3}
            maxLength={250}
            type="text"
            style={{ marginLeft: 10, padding: 4, width: 400 }}
            onChange={(e) => Setcomment(e.target.value.toString())}
            placeholder="Laisser un commentaire ..."
            required
            value={comment}
          />

          <div style={{}} className="">
            <IconContext.Provider
              value={{
                color: "rgb(133, 224, 206)",
                className: "mef-icon",
                size: 30,
                hoover: "red",
              }}
            >
              <FiSend onClick={(e) => onSubmit(e)} />
            </IconContext.Provider>
          </div>
        </div>

        {data.map((item, index) => {
          return (
            <div className="d-flex"
              style={{
                backgroundColor: "rgb(222, 242, 238)",
                margin: 5,
                padding: 10,
                width: 750,
              }}
              key={item._id}
            >
              <div className="row">
                <Avatar
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: "white",
                    borderRadius: 30,
                    marginLeft: 10,
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
                <p style={{ fontSize: "bold", marginTop: 10, marginLeft: 10 }}>
                  Username
                </p>
              </div>
              <div className="row">
              <p style={{ fontSize: 20 }}>{item.title}</p>
              <p>{item.description}</p>
              </div>
              <div className="row">
                <div style={{ marginLeft: 10 }}>
                  <FaThumbsUp />
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                  <FaThumbsDown />
                </div>
                <div>
                  <p>Répondre</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuizzCommentaires;
