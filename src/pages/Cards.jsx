import TarotCard from '../components/TarotCard'
import { tarotCards } from '../data/tarotCards'

function Cards() {
  return (
    <main className="page">
      <h1>Карти Таро</h1>
      <p>Каталог із {tarotCards.length} карт.</p>
      <div className="cards-grid">
        {tarotCards.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
    </main>
  )
}

export default Cards
