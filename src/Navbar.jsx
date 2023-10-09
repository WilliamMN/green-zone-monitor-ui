import "./css/estilo.css";
import { useState } from "react";

function Navbar(props) {
  const [classeAtiva, setClasseAtiva] = useState(props.paginaAtual);

  const handleClick = (event) => {
    setClasseAtiva(event.target.textContent.toLowerCase());
    pagina(event.target.textContent.toLowerCase())
  }

  function pagina(paginaAt) {
    props.setPaginaAtual(paginaAt)
    sessionStorage.PAGINA_ATUAL = paginaAt
  }

  //styled components

  return (
    <>
      <div className="header">
        <div className="container">
          <h1 className="titulo">Green Zone</h1>
          <ul className="navbar">
            <li className={classeAtiva === 'inicial' ? 'agora' : ''}>
              <a href="#" onClick={handleClick}>Inicial</a>
            </li>
            <li className={classeAtiva === 'simulador' ? 'agora' : ''}>
              <a href="#" onClick={handleClick}>Simulador</a>
            </li>
            <li>|</li>
            <li className={classeAtiva === 'login' ? 'agora' : ''}>
              <a href="#" onClick={handleClick}>Login</a>
            </li>
            <li className={classeAtiva === 'cadastro' ? 'agora' : ''}>
              <a href="#" onClick={handleClick}>Cadastro</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar
