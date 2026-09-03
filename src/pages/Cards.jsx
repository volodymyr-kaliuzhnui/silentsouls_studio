import { useLayoutEffect } from "react";

import TarotCard from "../components/TarotCard";
import { tarotCards } from "../data/tarotCards";

import "../styles/cards.css";

const CARDS_SCROLL_KEY = "silentsouls-cards-scroll";

function Cards() {
  useLayoutEffect(() => {
    const saved = sessionStorage.getItem(CARDS_SCROLL_KEY);
    window.scrollTo(0, saved !== null ? Number(saved) : 0);

    const saveScroll = () => {
      sessionStorage.setItem(CARDS_SCROLL_KEY, String(window.scrollY));
    };

    window.addEventListener("scroll", saveScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", saveScroll);
      saveScroll();
    };
  }, []);

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
