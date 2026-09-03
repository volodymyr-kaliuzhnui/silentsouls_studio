import { Link } from "react-router-dom";

import jokerImage from "../assets/taro/0Joker.jpg";

import "../styles/home.css";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">SILENT SOULS STUDIO</p>

          <h1 className="hero__title">
            Таро, що говорить
            <br />
            мовою тиші.
          </h1>

          <p className="hero__description">
            Готична колода для інтуїтивного читання, саморефлексії та глибшого
            розуміння себе.
          </p>

          <Link to="/cards" className="hero__button">
            Перейти до карт
          </Link>
        </div>

        <div className="hero__visual">
          <div className="hero__card-wrapper">
            <div className="hero__card-glow" />

            <img
              src={jokerImage}
              alt="Карта Таро Блазень"
              className="hero__card"
            />
          </div>
        </div>
      </section>

      <section className="about-deck">
        <div className="about-deck__heading">
          <p className="section-eyebrow">ПРО КОЛОДУ</p>

          <h2>
            Карти, які не диктують відповідь,
            <br />а допомагають її побачити
          </h2>
        </div>

        <div className="about-deck__content">
          <p>
            Ця колода створена для того, щоб не просто давати відповіді, а
            допомагати вам краще чути себе, свої відчуття та помічати те, що
            іноді залишається поза увагою.
          </p>

          <p>
            Її стиль поєднує готичну естетику та мотиви вікторіанської епохи —
            темні відтінки, старовинні деталі, рослинні орнаменти та атмосферні
            образи створюють особливий настрій кожної карти.
          </p>

          <p>
            У ілюстраціях ви можете зустріти троянди, метеликів, воронів,
            свічки, місяць, архітектурні деталі та інші символи, які доповнюють
            основний сюжет карти.
          </p>

          <p>
            Вам зовсім не потрібно знати значення кожного символу напам’ять.
            Карти створені таким чином, щоб із ними можна було працювати
            інтуїтивно, навіть якщо ви тільки починаєте знайомство з Таро.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
