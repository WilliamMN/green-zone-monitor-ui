import { useEffect } from "react";
import styles from "../css/simulador/Simulador.module.css";

function Simulador(props) {

  useEffect(() => {
    props.setPagina('simulador')
  }, []);

  return (
    <>
      <div className={styles["simulador"]}>
        <div className={styles["container"]}>
            <h2>Simulador</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium tempora architecto sint fugit
                dolorum? Ipsum laborum magnam similique labore, voluptate amet reprehenderit rem ab blanditiis quisquam
                laboriosam eaque alias. Reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium tempora architecto sint fugit dolorum? Ipsum laborum magnam similique labore, voluptate amet
                reprehenderit rem ab blanditiis quisquam laboriosam eaque alias. Reiciendis.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium tempora architecto sint fugit
                dolorum? Ipsum laborum magnam similique labore, voluptate amet reprehenderit rem ab blanditiis quisquam
                laboriosam eaque alias. Reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium tempora architecto sint fugit dolorum? Ipsum laborum magnam similique labore, voluptate amet
                reprehenderit rem ab blanditiis quisquam laboriosam eaque alias. Reiciendis.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium tempora architecto sint fugit
                dolorum? Ipsum laborum magnam similique labore, voluptate amet reprehenderit rem ab blanditiis quisquam
                laboriosam eaque alias. Reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium tempora architecto sint fugit dolorum? Ipsum laborum magnam similique labore, voluptate amet
                reprehenderit rem ab blanditiis quisquam laboriosam eaque alias. Reiciendis.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium tempora architecto sint fugit
                dolorum? Ipsum laborum magnam similique labore, voluptate amet reprehenderit rem ab blanditiis quisquam
                laboriosam eaque alias. Reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium tempora architecto sint fugit dolorum? Ipsum laborum magnam similique labore, voluptate amet
                reprehenderit rem ab blanditiis quisquam laboriosam eaque alias. Reiciendis.</p>

        </div>
    </div>
    </>
  );
}

export default Simulador;
