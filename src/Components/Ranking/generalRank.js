import React, { useEffect, useState } from "react";
import "./generalRank.css";
import Avatar from "avataaars";
import firebase from "../../firebase";

function GeneralRank(props) {
  const [joueur, setJoueur] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db
        .collection("Joueurs")
        .orderBy("Score", "desc")
        .get();
      console.log(data.docs);
      setJoueur(data.docs.map((joueur) => joueur.data()));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="table-responsive-sm">
        <table className="table table-striped ">
          <thead className="thead no-gutters">
            <tr>
              <th>Rang</th>
              <th>Joueur</th>
              <th>Niveau</th>
              <th>Score</th>
              <th>Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {joueur.map((item, index) => (
              <>
                <tr key={item.Nom}>
                  <td>{index + 1}</td>
                  <td>{item.Nom}</td>
                  <td>{item.Niveau}</td>
                  <td>{item.Score}</td>
                  <td>{item.Categorie}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GeneralRank;
