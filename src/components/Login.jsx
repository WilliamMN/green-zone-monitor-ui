import { useEffect } from "react";
import styles from "../css/login/Login.module.css";

function Login(props) {
  useEffect(() => {
    props.setPagina("login");
  }, []);

  return (
    <>
      <div className={styles["login"]}>
        <div className={styles["alerta_erro"]}>
          <div className={styles["card_erro"]} id="cardErro">
            <span id="mensagem_erro"></span>
          </div>
        </div>
        <div className={styles["container"]}>
          <div className={styles["card card-login"]}>
            <h2>Olá de volta!</h2>
            <div className={styles["formulario"]}>
              <div className={styles["campo"]}>
                <span>E-mail:</span>
                <input id="email_input" type="text" placeholder="Login" />
              </div>
              <div className={styles["campo"]}>
                <span>Senha:</span>
                <input id="senha_input" type="text" placeholder="******" />
              </div>
              <button className={styles["botao"]} onclick="entrar()">
                Entrar
              </button>
            </div>

            <div id="div_aguardar" className={styles["loading-div"]}>
              <img src="../assets/circle-loading.gif" id="loading-gif" />
            </div>

            <div id="div_erros_login"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
