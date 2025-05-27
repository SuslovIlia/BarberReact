import styles from "./SectionFre.module.css";
export default function SectionFre() {
  return (
    <div className={styles.heroContainer}>
      <img src="img/График.jpg" alt="" className={styles.heroImage} />

      <div className={styles.heroText}>
        <h1 style={{ marginBottom: "30px" }}>Наши барбершопы в Красноярске</h1>
        <p style={{ marginBottom: "10px" }}>
          Время работы пн-пт 10:00-19:00 +7 923 365 11 84
        </p>
        <p>ул. Заречная 75А 10:00-19:00</p>
      </div>
    </div>
  );
}
