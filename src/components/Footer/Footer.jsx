import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <a
          href="https://web.telegram.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-telegram fa-2x" aria-hidden="true"></i>
        </a>

        <a
          href="https://vk.com/ilyasyslovv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-vk fa-2x" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.youtube.com/watch?v=kz23xxukY5s&t=231s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
}
