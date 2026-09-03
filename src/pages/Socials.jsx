import '../styles/socials.css'

function Socials() {
  return (
    <main className="socials-page">
      <section className="socials-page__intro">
        <p className="section-eyebrow">СОЦІАЛЬНІ МЕРЕЖІ</p>

        <h1>
          Зустрінемось
          <br />
          поза колодою.
        </h1>

        <p>
          Більше образів, значень карт, натхнення та атмосфери
          Silent Souls — у наших соціальних мережах.
        </p>
      </section>

      <section className="socials-list">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="social-item"
        >
          <div>
            <span className="social-item__number">01</span>
            <h2>Instagram</h2>
          </div>

          <span className="social-item__arrow">↗</span>
        </a>

        <a
          href="https://tiktok.com/"
          target="_blank"
          rel="noreferrer"
          className="social-item"
        >
          <div>
            <span className="social-item__number">02</span>
            <h2>TikTok</h2>
          </div>

          <span className="social-item__arrow">↗</span>
        </a>

        <a
          href="https://threads.net/"
          target="_blank"
          rel="noreferrer"
          className="social-item"
        >
          <div>
            <span className="social-item__number">03</span>
            <h2>Threads</h2>
          </div>

          <span className="social-item__arrow">↗</span>
        </a>
      </section>
    </main>
  )
}

export default Socials