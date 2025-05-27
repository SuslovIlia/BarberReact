import styles from "./Ideys.module.css";
export default function Ideys() {
  return (
    <>
      <div className={styles.Ideys}>
        <img src="img/Идея.png" alt="фон" className={styles.ImgIdeys} />
        <div className={styles.textOverlay}>
          <h1 style={{ color: "white", fontSize: "bold" }}>
            ВСЕГДА ОТКРЫТЫ ДЛЯ НОВЫХ ИДЕЙ!
          </h1>
          <p style={{ color: "white", fontSize: "bold" }}>
            Своя идея стрижки? Фотосессия в подарок
          </p>
        </div>
      </div>
    </>
  );
}
