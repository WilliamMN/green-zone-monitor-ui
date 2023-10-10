import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [pagina, setPagina] = useState("inicial");

  return (
    <Router>
      <Navbar pagina={pagina} setPagina={setPagina} />
      <Body setPagina={setPagina} />
      <Footer />
    </Router>
  );
}

export default App;
