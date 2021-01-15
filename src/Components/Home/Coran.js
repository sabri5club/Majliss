import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import QuizzCarte from "../Quizz_Components/QuizzCarte";
import { Pagination } from "../Home/Pagination";
import "./Coran.css";

export default function Coran({ value, data, handleValue }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [versePerPage, setverse] = useState(5);

  //get current page

  const indexOfLastPost = currentPage * versePerPage;
  const indexOfFirstPost = indexOfLastPost - versePerPage;
  const currentVerse = data.slice(indexOfFirstPost, indexOfLastPost);

  // change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    console.log("changement de chapitre");
  }, [value]);

  // console.log(data[99].versets.length);
  return (
    <>
      <div className="row">
        <div className="col-2 justify-content-end">
          <div className="sidebar-coran">
            {data.map((item, idx) => {
              return (
                <div key={idx} className="row liste-coran-item">
                  <div className="col-3  text-center">
                    <p
                      style={{
                        backgroundColor: "rgb(236, 236, 244)",
                        borderRadius: 70,
                        color: "rgb(99, 99, 115)",
                      }}
                    >
                      {idx + 1}
                    </p>
                  </div>
                  <div key={idx} className="col-9 justify-content-center ">
                    <p onClick={(e) => handleValue(item.nom_phonetique)}>
                      {item.nom_phonetique}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-8">
          <div

            className="row d-flex justify-content-center "
          >
            <IconContext.Provider
              value={{ color: "#484848", className: "", size: 20 }}
            >
              {value.length > 0 &&
                data
                  .filter((item) =>
                    item.nom_phonetique.toLowerCase().includes(value)
                  )
                  .map((item) => {
                    return (
                      <div key={item.position}>
                        <QuizzCarte
                          title={item.nom_phonetique}
                          value={value}
                          description={item.versets.slice(
                            indexOfFirstPost,
                            indexOfLastPost
                          )}
                          numero={item.position}
                        />
                        <div className="row  justify-content-center">
                          <div className="col-10 justify-content-center">
                            <Pagination
                              versePerPage={versePerPage}
                              totalVerse={item.versets.length}
                              paginate={paginate}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </IconContext.Provider>
          </div>
        </div>
        <div className="col-2 justify-content-center text-center">
          <div className="sidebar-coran-audio">
            <button>Langue arabe</button>
            <p>Réglage lecture et audio coran</p>
          </div>
        </div>
      </div>
    </>
  );
}
