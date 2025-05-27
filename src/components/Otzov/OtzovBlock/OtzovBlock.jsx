import styles from "./OtzovBlock.module.css";
export default function OtzovBlock({ name, dop, otzov, image }) {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.OtzovBlock}>
          <img src={image} alt="Фото профиля" className={styles.Img} />
          <div className={styles.Info}>
            <h2
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "20px",
              }}
            >
              {name}
            </h2>

            <p
              style={{
                marginLeft: "20px",
                marginBottom: "10px",
                fontSize: "15px",
              }}
            >
              {dop}
            </p>

            <p style={{ marginLeft: "20px" }}>{otzov}</p>
          </div>
        </div>
      </div>
    </>
  );
}
