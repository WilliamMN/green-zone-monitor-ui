import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Body from "@/components/body/Body";
import Footer from "@/components/footer/Footer";

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
