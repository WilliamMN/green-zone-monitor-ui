import "@/css/style.css";
import planeta from "@/assets/imgs/planet-earth_color.png";
import lampada from "@/assets/imgs/lightbulb_color.png";
import terra from "@/assets/imgs/growth_color.png";

function OldHome() {
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
              <p>
                Nosso propósito é preservar e proteger os ecossistemas
                florestais por meio do monitoramento preciso e contínuo de
                temperatura e umidade. Buscamos promover a sustentabilidade
                ambiental e contribuir para a conservação da biodiversidade,
                garantindo um futuro mais equilibrado para as gerações presentes
                e futuras.
              </p>
            </div>
            <div className="box">
              <img src={lampada} />
              <h4>Visão</h4>
              <p>
                Enxergamos um mundo onde as florestas são valorizadas e
                respeitadas como pilares fundamentais da vida na Terra. Nossa
                visão é ser líderes globais no monitoramento de temperatura e
                umidade em florestas, contribuindo para a compreensão e
                mitigação das mudanças climáticas e promovendo a coexistência
                harmoniosa entre a humanidade e a natureza.
              </p>
            </div>
            <div className="box">
              <img src={terra} />
              <h4>Valores</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quas cupiditate asperiores provident magnam vitae illum iusto
                fugiat atque deleniti nulla sed iure suscipit, laborum, aliquid
                accusantium cum dicta minima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OldHome;
