import React from "react";

import "./App.css";

import Repositorios from "./Components/Repositorios.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <div className="container">
        <h1>Meu repositório</h1>
        <Repositorios />
      </div>
      <Footer />
    </>
  );
}

export default App;
