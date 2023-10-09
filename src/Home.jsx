import "./css/estilo.css";
import planeta from "./assets/imgs/planet-earth_color.png";
import lampada from "./assets/imgs/lightbulb_color.png";
import terra from "./assets/imgs/growth_color.png";

function Home() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <p>
            Sintonizados com a Natureza: Protegendo Florestas, Preservando o
            Futuro.
          </p>
        </div>
      </div>

      <div className="social">
        <div className="container">
          <div className="boxes">
            <div className="box">
              <img src={planeta} />
              <h4>Missão</h4>
              <img src={lampada} />
              <h4>Visão</h4>
              <img src={terra} />
              <h4>Valores</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
