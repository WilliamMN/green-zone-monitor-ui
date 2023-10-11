import { useEffect } from "react";
import styles from '../css/cadastro/Cadastro.module.css'

function Cadastro(props) {

  useEffect(() => {
    props.setPagina('cadastro')
  }, []);

  function cadastrar() {
    console.log("cadastro");
  }

  return (
    <>
      <div className={styles.login}>
      <div className={styles.alerta_erro}>
        <div className={styles.card_erro} id="cardErro">
          <span id="mensagem_erro"></span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.card_cadastro}`}>
          <h2>Bem-vindo!</h2>
          <div className={styles.formulario}>
            <div className={styles.campo}>
              <span>Nome:</span>
              <input id="nome_input" type="text" placeholder="Seu nome" />
            </div>
            <div className={styles.campo}>
              <span>E-mail:</span>
              <input
                id="email_input"
                type="text"
                placeholder="meuemail@provedor.com"
              />
            </div>
            <div className={styles.campo}>
              <span>Senha:</span>
              <input id="senha_input" type="password" placeholder="******" />
            </div>
            <div className={styles.campo}>
              <span>Empresa:</span>
              <select name="empresas" id="listaEmpresas">
                <option selected>Selecione uma empresa</option>
              </select>
            </div>
            <div className={styles.campo}>
              <span>Confirmação da Senha:</span>
              <input
                id="confirmacao_senha_input"
                type="password"
                placeholder="******"
              />
            </div>
            <button className={styles.botao} onClick={cadastrar()}>Cadastrar</button>
          </div>
          <div id="div_aguardar" className={styles.loading_div}>
            <img src="./assets/circle-loading.gif" id="loading-gif" />
          </div>

          <div id="div_erros_login"></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cadastro;