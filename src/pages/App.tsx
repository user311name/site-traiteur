import { useState } from "react";
import "./App.css";

const images = {
  hero:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=90",

  wedding:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90",

  buffet:
    "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=90",

  desserts:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=90",

  reception:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=90",

  table:
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=90",

  flowers:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=90",

  pastry:
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=90",

  outdoor:
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=90",
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">
      {/* =========================
          NAVBAR
      ========================= */}
      <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <a
          href="#accueil"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">NP</span>

          <span>
            <strong>NOVA PROJECT</strong>
            <small>PROJET · DIRECTION CRÉATIVE</small>
          </span>
        </a>

        {/* DESKTOP */}
        <nav className="desktop-nav">
          <a href="#accueil">Accueil</a>
          <a href="#prestations">Prestations</a>
          <a href="#galerie">Galerie</a>
          <a href="#apropos">À propos</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Parlons de votre projet
        </a>

        {/* MOBILE */}
        <button
          className="mobile-menu"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
        </button>

        <nav className="mobile-nav">
          <a href="#accueil" onClick={closeMenu}>
            Accueil
          </a>

          <a href="#prestations" onClick={closeMenu}>
            Prestations
          </a>

          <a href="#galerie" onClick={closeMenu}>
            Galerie
          </a>

          <a href="#apropos" onClick={closeMenu}>
            À propos
          </a>

          <a
            href="#contact"
            className="mobile-nav-cta"
            onClick={closeMenu}
          >
            Parlons de votre projet
          </a>
        </nav>
      </header>

      <main>
        {/* =========================
            HERO
        ========================= */}
        <section className="hero" id="accueil">
          <div
            className="hero-background"
            style={{
              backgroundImage: `url(${images.hero})`,
            }}
          />

          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow light">
              PROJET DIGITAL · DIRECTION CRÉATIVE
            </p>

            <h1>
              Une expérience
              <br />
              <em>gourmande</em>
              <br />
              et élégante.
            </h1>

            <p className="hero-description">
              Un univers digital imaginé autour de la gastronomie,
              de l'événementiel et d'une direction artistique
              chaleureuse.
            </p>

            <div className="hero-buttons">
              <a
                href="#prestations"
                className="button button-light"
              >
                Découvrir le projet
              </a>

              <a
                href="#galerie"
                className="text-link light-link"
              >
                Voir les créations
              </a>
            </div>

            <div className="hero-tags">
              <span>Direction artistique</span>
              <i />
              <span>Web design</span>
              <i />
              <span>Expérience digitale</span>
            </div>
          </div>

          <div className="hero-photo-card">
            <img
              src={images.buffet}
              alt="Aperçu du projet"
            />

            <div>
              <span>01</span>

              <strong>
                Une identité
                <br />
                pensée dans le détail.
              </strong>
            </div>
          </div>

          <div className="scroll-indicator">
            <span />
            <small>Découvrir</small>
          </div>
        </section>

        {/* =========================
            INTRO
        ========================= */}
        <section className="intro">
          <div className="intro-inner">
            <p className="eyebrow">
              L'ART DE RECEVOIR
            </p>

            <h2>
              Une belle expérience,
              <br />
              <em>une vraie histoire.</em>
            </h2>

            <p className="intro-text">
              Un concept digital pensé pour mettre en valeur un
              univers culinaire et événementiel. De la direction
              artistique à la présentation des contenus, chaque
              détail participe à l'expérience.
            </p>
          </div>
        </section>

        {/* =========================
            PRESTATIONS
        ========================= */}
        <section
          className="prestations"
          id="prestations"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                LES UNIVERS DU PROJET
              </p>

              <h2>
                Pour chaque moment,
                <br />
                <em>une ambiance différente.</em>
              </h2>
            </div>

            <p>
              Une direction artistique construite autour de
              plusieurs expériences visuelles et éditoriales.
            </p>
          </div>

          <div className="service-grid">
            {/* UNIVERS 01 */}
            <article className="service-card">
              <div className="service-image">
                <img
                  src={images.wedding}
                  alt="Univers événementiel élégant"
                />

                <span>01</span>
              </div>

              <div className="service-body">
                <p className="card-label">
                  L'EXPÉRIENCE
                </p>

                <h3>
                  Événements
                </h3>

                <p>
                  Une présentation élégante pensée pour mettre en
                  avant les grands moments et créer une expérience
                  visuelle immersive.
                </p>

                <a href="#contact">
                  Découvrir le projet
                </a>
              </div>
            </article>

            {/* UNIVERS 02 */}
            <article className="service-card featured-card">
              <div className="service-image">
                <img
                  src={images.buffet}
                  alt="Composition culinaire élégante"
                />

                <span>02</span>
              </div>

              <div className="service-body">
                <p className="card-label">
                  L'IDENTITÉ VISUELLE
                </p>

                <h3>
                  Créations
                </h3>

                <p>
                  Des compositions généreuses, une photographie
                  immersive et une mise en scène conçue pour
                  attirer naturellement le regard.
                </p>

                <a href="#galerie">
                  Voir les créations
                </a>
              </div>
            </article>

            {/* UNIVERS 03 */}
            <article className="service-card">
              <div className="service-image">
                <img
                  src={images.reception}
                  alt="Espace de réception contemporain"
                />

                <span>03</span>
              </div>

              <div className="service-body">
                <p className="card-label">
                  L'AMBIANCE
                </p>

                <h3>
                  Réceptions
                </h3>

                <p>
                  Un univers graphique adaptable à différents
                  formats, pensé pour transmettre une atmosphère
                  chaleureuse et premium.
                </p>

                <a href="#contact">
                  Découvrir l'univers
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* =========================
            FEATURE
        ========================= */}
        <section className="feature">
          <div className="feature-image">
            <img
              src={images.outdoor}
              alt="Grande réception extérieure"
            />
          </div>

          <div className="feature-content">
            <p className="eyebrow">
              DES MOMENTS À PARTAGER
            </p>

            <h2>
              Le visuel devient
              <br />
              <em>le cœur de l'expérience.</em>
            </h2>

            <p>
              Une grande image, une composition maîtrisée et une
              hiérarchie claire permettent de transformer chaque
              section en véritable moment visuel.
            </p>

            <a
              href="#contact"
              className="button button-pink"
            >
              Découvrir le projet
            </a>
          </div>
        </section>

        {/* =========================
            GALERIE
        ========================= */}
        <section
          className="gallery-section"
          id="galerie"
        >
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">
                L'UNIVERS DU PROJET
              </p>

              <h2>
                Des créations
                <br />
                <em>qui se regardent.</em>
              </h2>
            </div>

            <p>
              Une sélection de compositions, d'ambiances et de
              contenus visuels imaginés pour construire une identité
              cohérente.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item gallery-large">
              <img
                src={images.buffet}
                alt="Composition culinaire"
              />

              <div className="gallery-caption">
                <span>01</span>
                <strong>Compositions</strong>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={images.desserts}
                alt="Composition de desserts"
              />

              <div className="gallery-caption">
                <span>02</span>
                <strong>Douceurs & détails</strong>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src={images.pastry}
                alt="Création pâtissière"
              />

              <div className="gallery-caption">
                <span>03</span>
                <strong>Créations gourmandes</strong>
              </div>
            </div>

            <div className="gallery-item gallery-wide">
              <img
                src={images.table}
                alt="Mise en scène de réception"
              />

              <div className="gallery-caption">
                <span>04</span>
                <strong>Art de la table</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            ABOUT
        ========================= */}
        <section
          className="about"
          id="apropos"
        >
          <div className="about-image">
            <img
              src={images.flowers}
              alt="Composition florale élégante"
            />

            <div className="about-badge">
              <strong>
                100%
              </strong>

              <span>
                pensé dans
                <br />
                le détail
              </span>
            </div>
          </div>

          <div className="about-content">
            <p className="eyebrow">
              LE CONCEPT
            </p>

            <h2>
              La gourmandise
              <br />
              <em>avec élégance.</em>
            </h2>

            <p>
              Ce concept associe une direction artistique raffinée
              à une expérience digitale pensée pour valoriser
              l'univers culinaire et événementiel.
            </p>

            <p>
              L'objectif : créer une identité chaleureuse,
              immersive et mémorable, tout en conservant une
              navigation simple et intuitive.
            </p>

            <a
              href="#contact"
              className="button button-pink"
            >
              Découvrir le concept
            </a>
          </div>
        </section>

        {/* =========================
            DESSERT FEATURE
        ========================= */}
        <section className="dessert-feature">
          <div className="dessert-copy">
            <p className="eyebrow">
              LA TOUCHE FINALE
            </p>

            <h2>
              Et pour finir,
              <br />
              <em>quelques douceurs.</em>
            </h2>

            <p>
              Des contenus visuels travaillés jusque dans les
              moindres détails pour créer une présence digitale
              aussi belle que cohérente.
            </p>

            <a
              href="#contact"
              className="text-link"
            >
              Découvrir le projet
            </a>
          </div>

          <div className="dessert-image">
            <img
              src={images.desserts}
              alt="Composition élégante de desserts"
            />
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================= */}
        <section
          className="contact"
          id="contact"
        >
          <div className="contact-inner">
            <p className="eyebrow light">
              UN PROJET NOVA
            </p>

            <h2>
              On imagine quelque chose
              <br />
              <em>de beau ensemble ?</em>
            </h2>

            <p>
              Direction artistique, identité digitale ou création
              de site : chaque projet peut devenir une expérience
              pensée sur mesure.
            </p>

            <a
              href="#accueil"
              className="button button-light"
            >
              Découvrir NOVA
            </a>

            <div className="contact-info">
              <span>
                Projet portfolio
              </span>

              <span>
                Direction artistique · Web design
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <a
          href="#accueil"
          className="brand footer-brand"
        >
          <span className="brand-mark">
            NP
          </span>

          <span>
            <strong>
              NOVA PROJECT
            </strong>

            <small>
              PROJET · DIRECTION CRÉATIVE
            </small>
          </span>
        </a>

        <p>
          Projet portfolio · Direction artistique · Web design
        </p>

        <a href="#contact">
          Découvrir le projet
        </a>

        <div className="footer-bottom">
          <span>
            © 2026 Projet portfolio
          </span>

          <span>
            Direction artistique · Web design · Expérience digitale
          </span>
        </div>
      </footer>

      {/* CTA MOBILE */}
      <a
        href="#contact"
        className="mobile-cta"
        onClick={closeMenu}
      >
        Découvrir le projet
      </a>
    </div>
  );
}

export default App;