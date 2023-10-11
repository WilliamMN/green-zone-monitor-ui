import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/components/body/home/Home";
import Simlador from "@/components/body/simulador/Simulador";
import Login from "@/components/body/login/Login";
import Cadastro from "@/components/body/cadastro/Cadastro";
import Monitor from "@/components/body/monitor/Monitor.jsx";

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
