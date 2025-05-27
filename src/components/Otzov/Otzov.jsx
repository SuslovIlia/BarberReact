import OtzovBlock from "./OtzovBlock/OtzovBlock";

export default function Otzov({ name, dop, otzov, image }) {
  return (
    <>
      <hr />
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Отзовы</h1>
      <OtzovBlock
        image={"img/imgOtzov/Фото1.jpg"}
        name={"Юрий"}
        otzov={
          "Обожаю этот барбершоп! Соотношение цена-качество просто топовое!"
        }
      />
      <OtzovBlock
        image={"img/imgOtzov/Фото2.jpg"}
        name={"Виктор"}
        dop={"постоянный посетитель"}
        otzov={
          "Очень удобное месторасположение, и все барберы без исключения профессионалы своего дела"
        }
      />
      <OtzovBlock
        image={"img/imgOtzov/Фото3.jpg"}
        name={"Анатолий"}
        dop={"отзыв с VK"}
        otzov={
          "Приветливый персонал, кофе для ожидающих своего часа клиентов, талантливые мастера своего дела. Рекомендую"
        }
      />
    </>
  );
}
