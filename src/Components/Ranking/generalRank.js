import React from "react";
import "./generalRank.css";

export default function generalRank() {
  return (
    <>
      <div className="row">
        <div className=" col-md-12 d-flex justify-content-center">
          <table className="table table-striped">
            <thead className="thead thead-dark">
              <tr>
                <th>Classement</th>
                <th>Joueur</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>James</td>
                <td>4500</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sabri</td>
                <td>3400</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Fatima</td>
                <td>1400</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mourad</td>
                <td>190</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
