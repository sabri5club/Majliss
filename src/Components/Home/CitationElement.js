import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function CitationElement(props) {
  
  const line = {
    border: "0.5px solid black",
  };
  return (
    <div>
      <div style={{ marginTop: 50 }}>
        <div className="row row d-flex justify-content-center">
          <div className="col-4">
            <Card>
              <Card.Header>Citation</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p> {props.description} </p>
                  <footer className="blockquote-footer">
                    Rapporté de <cite title="Source Title">{props.auteur}</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitationElement;
