import '../styles/contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-page__intro">
        <p className="section-eyebrow">КОНТАКТИ</p>

        <h1>
          Залишаймось
          <br />
          на зв’язку.
        </h1>

        <p>
          Якщо у вас є питання про колоду, її значення або співпрацю —
          напишіть нам у зручний для вас спосіб.
        </p>
      </section>

      <section className="contact-page__links">
        <a href="mailto:your@email.com" className="contact-link">
          <span>Email</span>
          <strong>your@email.com</strong>
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>Instagram</span>
          <strong>@silentsoulsstudio</strong>
        </a>

        <a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>Telegram</span>
          <strong>@silentsoulsstudio</strong>
        </a>
      </section>
    </main>
  )
}

export default Contact