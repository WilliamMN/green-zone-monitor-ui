import styles from "@/css/home/cardbox/CardBox.module.css";

function CardBox(props) {
  return (
    <>
      <div className={styles.box}>
        <img src={props.imagem} />
        <h4>{props.title}</h4>
        <p>
          {props.text}
        </p>
      </div>
    </>
  );
}

export default CardBox;
