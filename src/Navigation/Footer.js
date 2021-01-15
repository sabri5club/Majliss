import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer-home">
        <div className="row justify-content-center ">
          <div className="col-4 d-flex justify-content-center">
            <p style={{ position: "relative", marginTop: 300 }}>
              Mentions légales
            </p>
          </div>
          <div className=" col-4 text-center d-flex justify-content-center">
            <p style={{ position: "relative", marginTop: 300 }}>
              Made by Sabricole
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <p style={{ position: "relative", marginTop: 300 }}>
              Nous contacter
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
