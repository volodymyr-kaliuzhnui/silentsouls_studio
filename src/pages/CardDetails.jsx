import { Link, useParams } from 'react-router-dom'
import { tarotCards } from '../data/tarotCards'

import '../styles/card-details.css'

function CardDetails() {
  const { slug } = useParams()
  const card = tarotCards.find((item) => item.slug === slug)

  if (!card) {
    return (
      <main className="page">
        <p>Карту не знайдено.</p>

        <Link to="/cards" className="button-link">
          ← Назад до карт
        </Link>
      </main>
    )
  }

  return (
    <main className="page">
      <Link to="/cards" className="button-link">
        ← Назад до карт
      </Link>

      <article className="card-details">
        <div className="card-details__visual">
          {card.image ? (
            <img
              src={card.image}
              alt={card.name}
              className="card-details__image"
            />
          ) : (
            <div className="card-details__placeholder">
              <span className="card-details__number">
                {String(card.number).padStart(2, '0')}
              </span>

              <span className="card-details__symbol">✦</span>

              <span className="card-details__placeholder-name">
                {card.name}
              </span>

              <span className="card-details__placeholder-label">
                SILENT SOULS
              </span>
            </div>
          )}
        </div>

        <div className="card-details__content">
          <header className="card-details__header">
            <p className="section-eyebrow">
              {card.arcana === 'major' ? 'СТАРШИЙ АРКАН' : 'МОЛОДШИЙ АРКАН'}
            </p>

            <h1>{card.name}</h1>

            <p className="card-details__original-name">
              {card.originalName}
            </p>

            <p className="card-details__meta">
              Номер: {card.number}
              {card.suit ? ` · Масть: ${card.suit}` : ''}
            </p>
          </header>

          <section className="card-meaning">
            <h2>Пряме положення</h2>

            <p className="card-meaning__keywords">
              <strong>Ключові слова:</strong>{' '}
              {card.upright.keywords.join(', ')}
            </p>

            <p>{card.upright.description}</p>

            <div className="card-meaning__categories">
              <div>
                <h3>Кохання</h3>
                <p>{card.upright.love}</p>
              </div>

              <div>
                <h3>Кар’єра</h3>
                <p>{card.upright.career}</p>
              </div>

              <div>
                <h3>Фінанси</h3>
                <p>{card.upright.finance}</p>
              </div>
            </div>

            <p>{card.upright.additionalDescription}</p>
          </section>

          <section className="card-meaning">
            <h2>Перевернуте положення</h2>

            <p className="card-meaning__keywords">
              <strong>Ключові слова:</strong>{' '}
              {card.reversed.keywords.join(', ')}
            </p>

            <p>{card.reversed.description}</p>

            <div className="card-meaning__categories">
              <div>
                <h3>Кохання</h3>
                <p>{card.reversed.love}</p>
              </div>

              <div>
                <h3>Кар’єра</h3>
                <p>{card.reversed.career}</p>
              </div>

              <div>
                <h3>Фінанси</h3>
                <p>{card.reversed.finance}</p>
              </div>
            </div>

            <p>{card.reversed.additionalDescription}</p>
          </section>
        </div>
      </article>
    </main>
  )
}

export default CardDetails