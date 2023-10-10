import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Simlador from "./Simulador";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Monitor from "./Monitor.jsx";

function Body(props) {
  return (
    <Routes>
      <Route path="/" index element={<Home setPagina={props.setPagina} />} />
      <Route path="/simulador" element={<Simlador setPagina={props.setPagina}/>} />
      <Route path="/login" element={<Login setPagina={props.setPagina} />} />
      <Route path="/cadastro" element={<Cadastro setPagina={props.setPagina} />} />
      <Route path="/monitor" element={<Monitor setPagina={props.setPagina} />} />
    </Routes>
  );
}

export default Body;
