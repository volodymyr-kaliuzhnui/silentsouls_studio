import { Link } from 'react-router-dom'

function TarotCard({ card }) {
  return (
    <Link to={`/cards/${card.slug}`} className="tarot-card">
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{card.originalName}</p>
    </Link>
  )
}

export default TarotCard
