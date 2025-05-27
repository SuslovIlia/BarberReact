import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import SectionImg from "./components/sectionOne/SectionImg";
import Prise from "./components/Prise/Prise";
import Ideys from "./components/sectionTwo/Ideys";
import Loyaut from "./components/Loyaut/Loyaut";
import Otzov from "./components/Otzov/Otzov";
import SectionFre from "./components/sectionFre/sectionFre";
import Footer from "./components/Footer/Footer";
import ScroolToHeader from "./components/Scrool/ScroolToHeader";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const priseRef = useRef(null);
  const ideysRef = useRef(null);
  const otzovRef = useRef(null);
  const freRef = useRef(null);
  return (
    <>
      <Header
        opennModal={() => setIsModalOpen(true)}
        priseRef={priseRef}
        ideysRef={ideysRef}
        otzovRef={otzovRef}
      />

      {isModalOpen && <Modal onCloas={() => setIsModalOpen(false)} />}

      <SectionImg opennModal={() => setIsModalOpen(true)} />
      {/* <Button text={"Записаться"} /> */}

      <div ref={priseRef}>
        <Prise openModal={() => setIsModalOpen(true)} />
      </div>

      <div ref={ideysRef}>
        <Ideys />
      </div>

      <div ref={freRef}>
        <Loyaut />
      </div>

      <div ref={otzovRef}>
        <Otzov />
      </div>

      <SectionFre />

      <Footer />
      <ScroolToHeader />
    </>
  );
}

export default App;
