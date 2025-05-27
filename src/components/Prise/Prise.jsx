import Cards from "./Cards/Cards";
import { massCardStr, massCardBoroda } from "./mass/mass.js";
import styles from "./Cards/Cards.module.css";

export default function Prise({ openModal }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(232, 223, 216)",
          paddingBottom: "40px",
          paddingTop: "20px",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          Стрижки
        </h1>
        <div className={styles.cardWrapper}>
          {massCardStr.map((card, i) => (
            <Cards
              key={i}
              image={card.image}
              textCards={card.textCards}
              time={card.time}
              many={card.many}
              openModal={openModal}
            />
          ))}
        </div>

        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          Борода и бритье
        </h1>

        <div className={styles.cardWrapper}>
          {massCardBoroda.map((card, i) => (
            <Cards
              key={i}
              image={card.image}
              textCards={card.textCards}
              time={card.time}
              many={card.many}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
    </>
  );
}
