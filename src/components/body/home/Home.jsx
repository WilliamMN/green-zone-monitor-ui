import styles from "@/css/home/Home.module.css";
import planeta from "@/assets/imgs/planet-earth_color.png";
import lampada from "@/assets/imgs/lightbulb_color.png";
import terra from "@/assets/imgs/growth_color.png";
import CardBox from "@/components/body/home/cardbox/CardBox";
import { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    props.setPagina("inicial");
  }, []);

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.container}>
          <p>
            Sintonizados com a Natureza Protegendo Florestas Preservando o
            Futuro
          </p>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.container}>
          <div className={styles.boxes}>
            <CardBox
              imagem={planeta}
              title={"Missão"}
              text={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quas cupiditate asperiores provident magnam vitae illum iusto fugiat atque deleniti nulla sed iure suscipit, laborum, aliquid accusantium cum dicta minima."
              }
            />
            <CardBox
              imagem={lampada}
              title={"Visão"}
              text={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quas cupiditate asperiores provident magnam vitae illum iusto fugiat atque deleniti nulla sed iure suscipit, laborum, aliquid accusantium cum dicta minima.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quas cupiditate asperiores provident magnam vitae illum iusto fugiat atque deleniti nulla sed iure suscipit, laborum, aliquid accusantium cum dicta minima."
              }
            />
            <CardBox
              imagem={terra}
              title={"Valores"}
              text={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quas cupiditate asperiores provident."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
