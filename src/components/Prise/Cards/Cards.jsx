import Button from "../../Button/Button";
import styles from "./Cards.module.css";

export default function Cards({ textCards, time, many, openModal, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="" style={{ height: "80px", width: "80px" }} />

      <h2>{textCards}</h2>
      <p>{time}</p>
      <h3>{many}</h3>
      <Button text={"Записаться"} onClack={openModal} />
    </div>
  );
}
