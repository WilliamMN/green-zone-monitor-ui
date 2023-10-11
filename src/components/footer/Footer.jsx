import styles from "@/css/footer/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <h4>Feito por William Marques Nicolau &copy; 2023</h4>
          <span className={styles.version}>v1.0.0</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
