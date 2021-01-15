import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Routage from "./Navigation/Routage";
import TopHeader from "./Navigation/topHeader.js";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';
// import * as firebase from "firebase";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App =() => {

useEffect(()=> {
  if (localStorage.token) {
store.dispatch(loadUser());
}
}, []);


  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Routage>
          <Footer />
        </Routage>
      </div>
    </Provider>
  );
}

export default App;
