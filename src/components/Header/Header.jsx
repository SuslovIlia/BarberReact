import Button from "../Button/Button";
import styles from "./Header.module.css";

export default function Header({ opennModal, priseRef, ideysRef, otzovRef }) {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderTop}>
        <Button onClick={opennModal} text={"Обратный звонок"} />
        <h1>Тестовый</h1>
        <p>+7 923 365 11-84</p>
      </div>

      <div className={styles.HeaderBottom}>
        <ul>
          <li onClick={() => scrollToSection(priseRef)}>Стрижки</li>
          <li onClick={() => scrollToSection(priseRef)}>Борода и бритье</li>
          <li onClick={() => scrollToSection(ideysRef)}>Преимущества</li>
          <li onClick={() => scrollToSection(otzovRef)}>Отзывы</li>
        </ul>
      </div>
    </header>
  );
}
