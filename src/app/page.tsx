import { BookingForm } from "@/components/BookingForm";

const services = [
  { number: "01", title: "Herreklip", description: "Klassisk klip med saks og maskine, vask, styling og personlig rådgivning.", price: "250 kr.", duration: "30 min." },
  { number: "02", title: "Skin fade", description: "Skarpe overgange fra helt kort til din ønskede længde med ren finish.", price: "300 kr.", duration: "45 min." },
  { number: "03", title: "Klip & skæg", description: "Herreklip kombineret med trimning, skarpe kanter og styling af skægget.", price: "350 kr.", duration: "60 min." },
  { number: "04", title: "Skægtrim", description: "Form, kanter og trimning, så skægget sidder skarpt og passer til ansigtet.", price: "150 kr.", duration: "20 min." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top"><span className="logo-name">Garage Barbershop</span><span className="logo-byline">by Arda</span></a>
        <nav className="nav" aria-label="Hovednavigation">
          <a className="nav-services" href="#behandlinger">Klip/pris</a>
          <a href="#om-os">Om os</a>
          <a className="nav-cta" href="#booking">Book en tid</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Herrefrisør · Ringsted</p>
          <h1>Skarpt hår.<br /><em>God energi.</em></h1>
          <p className="hero-intro">Velkommen hos Garage Barbershop by Arda. Her får du skarpe fades, klassiske herreklip og et skæg, der sidder lige i skabet.</p>
          <a className="primary-btn" href="#booking">Book din tid <span className="arrow">↗</span></a>
          <div className="hero-meta">
            <div className="meta-item"><span className="meta-value">100%</span><span className="meta-label">fokus på dig</span></div>
            <div className="meta-item"><span className="meta-value">Ringsted</span><span className="meta-label">Nørregade 41A</span></div>
          </div>
        </div>
        <div className="hero-image"><span className="image-note">Nørregade 41A · 4100 Ringsted</span></div>
      </section>

      <section className="section services" id="behandlinger">
        <div className="section-header">
          <div><div className="section-kicker">Priser & behandlinger</div><h2>Find dit look.<br /><em>Vi klarer resten.</em></h2></div>
          <p className="section-note">Alle behandlinger starter med en kort snak, så vi rammer den rigtige form, længde og finish.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><div className="service-footer"><span className="price">{service.price}</span><span className="duration">{service.duration}</span></div></article>)}
        </div>
      </section>

      <section className="section about" id="om-os">
        <div className="about-art" aria-hidden="true" />
        <div className="about-copy"><div className="section-kicker">Garage Barbershop by Arda · Ringsted</div><h2>Din stil.<br /><em>Vores håndværk.</em></h2><p>Hos os handler det om mere end bare en klipning. Du får ærlig rådgivning, skarpe detaljer og en afslappet oplevelse i stolen. Kom som du er, gå herfra med et look, der føles som dig.</p><div className="signature">Nørregade 41A</div></div>
      </section>

      <section className="section booking" id="booking">
        <div><div className="section-kicker">Næste skridt</div><h2>Klar til en<br /><em>ny stil?</em></h2><p className="booking-lead">Send en forespørgsel, så vender vi tilbage med en endelig bekræftelse. Din tid er først reserveret, når du hører fra os.</p><div className="booking-address"><strong>Garage Barbershop by Arda</strong><br />Nørregade 41A<br />4100 Ringsted</div></div>
        <BookingForm />
      </section>

      <footer className="site-footer"><div className="footer-copy">© 2026 Garage Barbershop by Arda · Nørregade 41A · 4100 Ringsted</div><div className="footer-links"><a href="tel:+4560140627">60 14 06 27</a><a href="#top">Til toppen ↑</a></div></footer>
    </main>
  );
}
