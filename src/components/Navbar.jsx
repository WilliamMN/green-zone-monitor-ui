import { useNavigate } from "react-router-dom";
import styles from "../css/navbar/Navbar.module.css";
import { useEffect, useState } from "react";

function Navbar(props) {
  const navigate = useNavigate();

  const [classeAtiva, setClasseAtiva] = useState(props.pagina);

  useEffect(() => {
    setClasseAtiva(props.pagina);
  }, [props.pagina]);

  const handleClick = (event, paginaAtual) => {
    props.setPagina(event.target.textContent.toLowerCase());
    navigate(paginaAtual);
  };

  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["container"]}>
          <h1 className={styles["titulo"]}>Green Zone</h1>
          <ul className={styles["navbar"]}>
            <li className={classeAtiva === "inicial" ? styles["agora"] : ""}>
              <a
                onClick={(event) => {
                  handleClick(event, "/");
                }}
              >
                Inicial
              </a>
            </li>
            <li className={classeAtiva === "simulador" ? styles["agora"] : ""}>
              <a
                onClick={(event) => {
                  handleClick(event, "/simulador");
                }}
              >
                Simulador
              </a>
            </li>
            <li>|</li>
            <li className={classeAtiva === "login" ? styles["agora"] : ""}>
              <a
                onClick={(event) => {
                  handleClick(event, "/login");
                }}
              >
                Login
              </a>
            </li>
            <li className={classeAtiva === "cadastro" ? styles["agora"] : ""}>
              <a
                onClick={(event) => {
                  handleClick(event, "/cadastro");
                }}
              >
                Cadastro
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
