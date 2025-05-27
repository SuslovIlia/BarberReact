import styles from "./Button.module.css";
export default function Button({ text, onClack }) {
  return (
    <>
      <button onClick={onClack}>{text}</button>
    </>
  );
}
