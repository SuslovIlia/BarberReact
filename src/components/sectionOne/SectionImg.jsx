import styles from "./SectionImg.module.css";
import Button from "../Button/Button";

export default function SectionImg({ opennModal }) {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div> {/* Затемнение */}
      <div className={styles.heroContent}>
        <h1>Барбершоп №1</h1>
        <p>У нас работают самые опытные профессионалы!</p>
        <Button onClack={opennModal} text="Записаться" />
      </div>
    </div>
  );
}
