import styles from "./Modal.module.css";
export default function Modal({ onCloas, onCloasRetern }) {
  return (
    <div className={styles.modalcontainer}>
      <h1>Оставить заявку</h1>

      <h2>Имя</h2>
      <input type="text" />

      <h2>Телефон</h2>
      <input type="text" />

      <button onClick={onCloas}>Отправить</button>
      <button onClick={onCloas}>Отмена</button>
    </div>
  );
}
