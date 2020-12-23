import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer-home">
        <div className="row justify-content-center ">
          <div className="col-4 d-flex">
            <p style={{ position: "fixed", marginTop: 250 }}>
              Mentions légales
            </p>
          </div>
          <div className=" col-4 text-center d-flex">
            <p style={{ position: "fixed", marginTop: 250 }}>
              Made by Sabricole
            </p>
          </div>
          <div className="col-4 d-flex">
            <p style={{ position: "fixed", marginTop: 250 }}>Nous contacter</p>
          </div>
        </div>
      </div>
    </>
  );
}
