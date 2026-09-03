import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import TarotCard from "../components/TarotCard";
import { tarotCards } from "../data/tarotCards";

import "../styles/cards.css";

function Cards() {
  const location = useLocation();

  useLayoutEffect(() => {
    const restoreScrollY = location.state?.restoreScrollY;

    if (typeof restoreScrollY === "number") {
      window.scrollTo(0, restoreScrollY);
      return;
    }

    window.scrollTo(0, 0);
  }, [location.state?.restoreScrollY]);

  return (
    <main className="cards-page">
      <section className="cards-page__intro">
        <p className="section-eyebrow">КОЛОДА</p>

        <h1>Карти Таро</h1>

        <p className="cards-page__description">
          Відкрийте значення карт Silent Souls та досліджуйте їхні образи,
          символи й інтерпретації у прямому та перевернутому положенні.
        </p>

        <p className="cards-page__count">У колоді: {tarotCards.length} карт</p>
      </section>

      <section className="cards-grid">
        {tarotCards.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </section>
    </main>
  );
}

export default Cards;
