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
          <span className="brand-mark">MD</span>

          <span>
            <strong>MES DÉLICES</strong>
            <small>TRAITEUR · TOULOUSE</small>
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
          Parlons de votre événement
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
            Parlons de votre événement
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
              TRAITEUR · TOULOUSE · CUGNAUX
            </p>

            <h1>
              Des réceptions
              <br />
              <em>gourmandes</em>
              <br />
              et inoubliables.
            </h1>

            <p className="hero-description">
              Buffets généreux, créations gourmandes et jolies tables
              imaginés pour vos mariages, anniversaires et réceptions
              privées.
            </p>

            <div className="hero-buttons">

              <a
                href="#prestations"
                className="button button-light"
              >
                Découvrir nos prestations
              </a>

              <a
                href="#galerie"
                className="text-link light-link"
              >
                Voir les créations
              </a>

            </div>

            <div className="hero-tags">
              <span>Mariages</span>
              <i />
              <span>Réceptions</span>
              <i />
              <span>Buffets</span>
            </div>

          </div>


          <div className="hero-photo-card">

            <img
              src={images.buffet}
              alt="Buffet généreux Mes Délices"
            />

            <div>
              <span>01</span>

              <strong>
                Des buffets
                <br />
                qui donnent envie.
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
              Une belle table,
              <br />
              <em>une vraie histoire.</em>
            </h2>

            <p className="intro-text">
              Chez Mes Délices, chaque réception est pensée comme un
              moment généreux et chaleureux. De la cuisine à la
              présentation, chaque détail compte.
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
                NOS PRESTATIONS
              </p>

              <h2>
                Pour chaque moment,
                <br />
                <em>une ambiance différente.</em>
              </h2>

            </div>

            <p>
              Des prestations pensées selon votre événement, son
              ambiance et vos envies.
            </p>

          </div>


          <div className="service-grid">

            {/* MARIAGES */}
            <article className="service-card">

              <div className="service-image">

                <img
                  src={images.wedding}
                  alt="Réception de mariage élégante"
                />

                <span>01</span>

              </div>

              <div className="service-body">

                <p className="card-label">
                  POUR LE GRAND JOUR
                </p>

                <h3>
                  Mariages
                </h3>

                <p>
                  Un buffet élégant, une réception chaleureuse et
                  une présentation pensée pour célébrer votre mariage.
                </p>

                <a href="#contact">
                  Parler de mon mariage
                </a>

              </div>

            </article>


            {/* BUFFETS */}
            <article className="service-card featured-card">

              <div className="service-image">

                <img
                  src={images.buffet}
                  alt="Grand buffet gourmand"
                />

                <span>02</span>

              </div>

              <div className="service-body">

                <p className="card-label">
                  LE PLAISIR DE PARTAGER
                </p>

                <h3>
                  Buffets généreux
                </h3>

                <p>
                  Des préparations variées, généreuses et joliment
                  présentées pour créer une table qui attire tous les
                  regards.
                </p>

                <a href="#galerie">
                  Voir nos buffets
                </a>

              </div>

            </article>


            {/* RÉCEPTIONS */}
            <article className="service-card">

              <div className="service-image">

                <img
                  src={images.reception}
                  alt="Salle pour une réception privée"
                />

                <span>03</span>

              </div>

              <div className="service-body">

                <p className="card-label">
                  POUR VOS MOMENTS PRIVÉS
                </p>

                <h3>
                  Réceptions privées
                </h3>

                <p>
                  Anniversaire, baptême, repas de famille ou soirée
                  entre proches : nous imaginons une réception à
                  votre image.
                </p>

                <a href="#contact">
                  Parler de mon événement
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
              alt="Grande réception extérieure avec buffet"
            />

          </div>

          <div className="feature-content">

            <p className="eyebrow">
              DES MOMENTS À PARTAGER
            </p>

            <h2>
              Le buffet devient
              <br />
              <em>le cœur de la fête.</em>
            </h2>

            <p>
              De grandes tables généreuses, des créations gourmandes
              et une présentation soignée : tout est imaginé pour
              donner envie de se servir, de goûter et surtout de
              partager.
            </p>

            <a
              href="#contact"
              className="button button-pink"
            >
              Imaginer ma réception
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
                L'UNIVERS MES DÉLICES
              </p>

              <h2>
                Des créations
                <br />
                <em>qui se regardent.</em>
              </h2>

            </div>

            <p>
              Une sélection de buffets, desserts et réceptions dans
              l'esprit chaleureux de Mes Délices.
            </p>

          </div>


          <div className="gallery-grid">

            <div className="gallery-item gallery-large">

              <img
                src={images.buffet}
                alt="Grand buffet gourmand"
              />

              <div className="gallery-caption">
                <span>01</span>
                <strong>Buffets généreux</strong>
              </div>

            </div>


            <div className="gallery-item">

              <img
                src={images.desserts}
                alt="Buffet de desserts"
              />

              <div className="gallery-caption">
                <span>02</span>
                <strong>Douceurs & desserts</strong>
              </div>

            </div>


            <div className="gallery-item">

              <img
                src={images.pastry}
                alt="Gâteau et pâtisserie élégante"
              />

              <div className="gallery-caption">
                <span>03</span>
                <strong>Créations gourmandes</strong>
              </div>

            </div>


            <div className="gallery-item gallery-wide">

              <img
                src={images.table}
                alt="Table élégante pour une réception"
              />

              <div className="gallery-caption">
                <span>04</span>
                <strong>Tables de réception</strong>
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
              alt="Décoration élégante de mariage"
            />

            <div className="about-badge">

              <strong>
                100%
              </strong>

              <span>
                fait avec
                <br />
                passion
              </span>

            </div>

          </div>


          <div className="about-content">

            <p className="eyebrow">
              MES DÉLICES
            </p>

            <h2>
              La gourmandise
              <br />
              <em>avec élégance.</em>
            </h2>

            <p>
              Basée à Cugnaux, près de Toulouse, Mes Délices
              accompagne vos plus beaux moments avec une cuisine
              généreuse et une attention particulière portée à la
              présentation.
            </p>

            <p>
              Parce qu'une réception réussie ne se résume pas à ce
              qu'il y a dans l'assiette, nous imaginons une véritable
              expérience autour de votre événement.
            </p>

            <a
              href="#contact"
              className="button button-pink"
            >
              Découvrir Mes Délices
            </a>

          </div>

        </section>


        {/* =========================
            DESSERT FEATURE
        ========================= */}
        <section className="dessert-feature">

          <div className="dessert-copy">

            <p className="eyebrow">
              LA TOUCHE SUCRÉE
            </p>

            <h2>
              Et pour finir,
              <br />
              <em>quelques douceurs.</em>
            </h2>

            <p>
              Mignardises, pâtisseries, fruits et desserts généreux
              trouvent leur place sur des buffets pensés pour être
              aussi beaux que gourmands.
            </p>

            <a
              href="#contact"
              className="text-link"
            >
              Imaginer mon buffet
            </a>

          </div>


          <div className="dessert-image">

            <img
              src={images.desserts}
              alt="Buffet élégant de desserts"
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
              VOTRE PROCHAIN ÉVÉNEMENT
            </p>

            <h2>
              On imagine quelque chose
              <br />
              <em>de beau ensemble ?</em>
            </h2>

            <p>
              Mariage, anniversaire, réception privée ou buffet
              gourmand : racontez-nous simplement votre projet.
            </p>

            <a
              href="mailto:contact@mesdelices31.fr"
              className="button button-light"
            >
              Parler de votre événement
            </a>

            <div className="contact-info">

              <span>
                Toulouse · Cugnaux
              </span>

              <span>
                @mesdelices31_
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
            MD
          </span>

          <span>
            <strong>
              MES DÉLICES
            </strong>

            <small>
              TRAITEUR · TOULOUSE
            </small>
          </span>

        </a>


        <p>
          Traiteur · Toulouse · Cugnaux
        </p>


        <a href="#contact">
          Parler de votre événement
        </a>


        <div className="footer-bottom">

          <span>
            © 2026 Mes Délices
          </span>

          <span>
            Mariages · Réceptions · Buffets
          </span>

        </div>

      </footer>


      {/* CTA MOBILE */}
      <a
        href="#contact"
        className="mobile-cta"
        onClick={closeMenu}
      >
        Parler de votre événement
      </a>

    </div>
  );
}

export default App;