import React from "react";
import SearchBar from "../SearchQuran/SearchBar";
import quran from  "./../../img/quran-bg.jpg";
import history from "../../Navigation/History";


const Library = () => {
  return (





          <div className="row d-flex  justify-content-around ">

      <div
        onClick={() => history.push("/Search")}
        style={{
          width: 200,
          color: "black",
          height: 300,
          backgroundImage: `url(${quran})`,
          backgroundSize: "cover",
          backgroundPosition : "center",
          marginTop: 30,
          opacity: 0.9,
        }}
        className="col-4 d-flex justify-content-center align-items-center"
      >
        Coran
      </div>

      <div
          onClick={() => history.push("/Hadith")}
        style={{
          width: 300,
          color: "white",
          height: 300,
          backgroundColor: "blue",
          marginTop: 30,
          opacity: 0.7,
        }}
        className="col-4 d-flex justify-content-center text-center align-items-center flex-column"
      >
      <h4>Hadith </h4>
        Celui qui prend un chemin pour rechercher la science, Allah lui fait prendre par cela un chemin vers le paradis.
      </div>
    </div>
//
    //   <div
    //     onClick={() => history.push("/Citation")}
    //     style={{
    //       width: 200,
    //       color: "brown",
    //       fontSize: "20px",
    //       height: 200,
    //       fontFamily: "monospace",
    //       backgroundColor: "#85e0ce",
    //       borderStyle: "revert",
    //       marginTop: 30,
    //       opacity: 0.9,
    //     }}
    //     className="col-3 d-flex justify-content-center align-items-center"
    //   >
    //
    //     <div className="col-12 justify-content-center text-center ">
    //       <p>Citations</p>
    //       <p>Bientot disponible</p>
    //     </div>
    //   </div>
    // </div>


    //   <div className="row d-flex  justify-content-around ">
    //     <div
    //       onClick={() => history.push("/Search")}
    //       style={{
    //         width: 200,
    //         color: "#36ab9d",
    //         height: 200,
    //         backgroundColor: "brown",
    //         marginTop: 30,
    //         opacity: 0.7,
    //       }}
    //       className="col-3 d-flex justify-content-center align-items-center"
    //     >
    //       Invocation
    //     </div>
    //
    //     <div
    //       onClick={() => history.push("/Prophete")}
    //       style={{
    //         width: 200,
    //         color: "#36ab9d",
    //         height: 200,
    //         backgroundColor: "yellowgreen",
    //         marginTop: 30,
    //         opacity: 0.7,
    //       }}
    //       className="col-3 d-flex justify-content-center align-items-center"
    //     >
    //       Les prophètes
    //     </div>
    //     <div
    //       style={{
    //         width: 200,
    //         color: "#36ab9d",
    //         height: 200,
    //         backgroundColor: "green",
    //         marginTop: 30,
    //         opacity: 0.7,
    //       }}
    //       className="col-3 d-flex justify-content-center align-items-center"
    //     >
    //       Les compagnons
    //     </div>
    // </div>
    //
    // </div>



    );
  }

  export default Library;
