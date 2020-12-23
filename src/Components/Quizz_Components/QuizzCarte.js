import React from "react";
import { FiShare2 } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

export default function QuizzCarte({ title, description, numero }) {
  return (
    <>
      <div className="card mef-card-categories" style={{ width: "60vw" }}>
        <div
          style={{ backgroundColor: "rgb(99, 99, 115)", color: "white" }}
          className="card-header"
        >
          Sourate
        </div>
        <div className="card-body mef-card-categorie">
          <div className="row">
            <div className="col-7  d-flex flex-row justify-content-end ">
              <h4 className="card-title ">{title}</h4>
            </div>
            <div className="col-5 d-flex flex-row justify-content-end ">
              <FaRegHeart />
            </div>
          </div>
          {description.map((item, index) => (
            <div key={index}>
              <hr />
              <p className="verset-arabe">{item.text_arabe}</p>
            </div>
          ))}
          <hr />
          <div className="row">
            <div className="col-9 col-sm-9 col-md-8 d-flex flex-row  ">
              <h6>Sourate numéro : {numero}</h6>
            </div>
            <div className="col-3 col-sm-3 col-md-4 d-flex justify-content-end ">
              <FiShare2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
