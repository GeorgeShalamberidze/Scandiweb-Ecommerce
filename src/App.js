import React from "react";
import Main from "./components/Main/main";
import Header from "./components/Header/Header";
import "./main.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
};

export default App;
