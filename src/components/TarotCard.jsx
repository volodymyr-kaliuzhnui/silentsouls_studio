import { Link, useNavigate } from "react-router-dom";

function TarotCard({ card }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    navigate(`/cards/${card.slug}`, {
      state: {
        fromCatalog: true,
        catalogScrollY: window.scrollY,
      },
    });
  };

  return (
    <Link
      to={`/cards/${card.slug}`}
      onClick={handleClick}
      className="tarot-card"
    >
      {card.image ? (
        <img src={card.image} alt={card.name} className="tarot-card__image" />
      ) : (
        <div className="tarot-card__placeholder">
          <span className="tarot-card__number">
            {String(card.number).padStart(2, "0")}
          </span>

          <span className="tarot-card__symbol">✦</span>

          <span className="tarot-card__placeholder-name">{card.name}</span>

          <span className="tarot-card__placeholder-label">SILENT SOULS</span>
        </div>
      )}

      <h2>{card.name}</h2>
      <p>{card.originalName}</p>
    </Link>
  );
}

export default TarotCard;
