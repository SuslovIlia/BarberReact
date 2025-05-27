import { useEffect, useState } from "react";
import styles from "./ScrollToHeader.module.css";

export default function ScroolToHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      if (window.scrollY > 700) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button onClick={ScrollToTop} className={styles.scrollToTopButton}>
          &uarr;
        </button>
      )}
    </>
  );
}
