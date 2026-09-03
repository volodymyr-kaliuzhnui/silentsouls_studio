import { Link, useParams } from "react-router-dom";

import { tarotCards } from "../data/tarotCards";

function CardDetails() {
  const { slug } = useParams();

  const card = tarotCards.find((item) => item.slug === slug);

  if (!card) {
    return (
      <main className="page">
        <p>Карту не знайдено.</p>

        <Link to="/cards" className="button-link">
          ← Назад до карт
        </Link>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to="/cards" className="button-link">
        ← Назад до карт
      </Link>

      <article className="card-details">
        <img src={card.image} alt={card.name} />

        <div>
          <h1>{card.name}</h1>

          <p>{card.originalName}</p>

          <p>
            Номер: {card.number} · Аркан: {card.arcana}
            {card.suit ? ` · Масть: ${card.suit}` : ""}
          </p>

          <section>
            <h2>Пряме положення</h2>

            <p>
              <strong>Ключові слова:</strong> {card.upright.keywords.join(", ")}
            </p>

            <p>{card.upright.description}</p>

            <h3>Кохання</h3>
            <p>{card.upright.love}</p>

            <h3>Кар’єра</h3>
            <p>{card.upright.career}</p>

            <h3>Фінанси</h3>
            <p>{card.upright.finance}</p>

            <p>{card.upright.additionalDescription}</p>
          </section>

          <section>
            <h2>Перевернуте положення</h2>

            <p>
              <strong>Ключові слова:</strong>{" "}
              {card.reversed.keywords.join(", ")}
            </p>

            <p>{card.reversed.description}</p>

            <h3>Кохання</h3>
            <p>{card.reversed.love}</p>

            <h3>Кар’єра</h3>
            <p>{card.reversed.career}</p>

            <h3>Фінанси</h3>
            <p>{card.reversed.finance}</p>

            <p>{card.reversed.additionalDescription}</p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default CardDetails;
