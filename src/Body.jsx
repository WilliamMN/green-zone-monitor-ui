import Home from "./Home";
import Simlador from "./Simulador";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Monitor from "./Monitor.jsx";

function Body({ paginaAtual }) {
  function conteudo() {
    var cont;
    switch (paginaAtual) {
      case "simulador":
        cont = <Simlador />;
        break;
      case "login":
        cont = <Login />;
        break;
      case "cadastro":
        cont = <Cadastro />;
        break;
      case "monitor":
        cont = <Monitor />;
        break;
      default:
        cont = <Home />;
        break;
    }
    return cont;
  }

  return <>{conteudo()}</>;
}

export default Body;
