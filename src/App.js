import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Routage from "./Navigation/Routage";
import TopHeader from "./Navigation/topHeader.js";
// import * as firebase from "firebase";

function App() {
  return (
    <div className="container-fluid">
      <Routage>
        <Footer />
      </Routage>
    </div>
  );
}

export default App;
