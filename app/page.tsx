const projects = [
  {
    number: "01",
    title: "Street Studies",
    location: "Frankfurt and elsewhere",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    alt: "Urban street at dusk",
    shape: "project-image-tall",
  },
  {
    number: "02",
    title: "Built Forms",
    location: "Selected cities",
    year: "2025–26",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85",
    alt: "Modern architecture and geometric forms",
    shape: "project-image-wide",
  },
  {
    number: "03",
    title: "Elsewhere",
    location: "Travel notes",
    year: "2024–26",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    alt: "Landscape encountered while travelling",
    shape: "project-image-wide",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home">
          GUILLERMO GAMÓN
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="intro" id="home">
        <p className="eyebrow">PHOTOGRAPHY · FRANKFURT AM MAIN</p>

        <h1>
          An ongoing
          <br />
          collection<span className="period">.</span>
        </h1>

        <div className="intro-bottom">
          <p>
            People, places and things
            <br />
            noticed along the way.
          </p>
          <a className="text-link" href="#work">
            SELECTED WORK <span>↓</span>
          </a>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <span>SELECTED PROJECTS</span>
          <span>2024 — 2026</span>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              className={`project project-${index + 1}`}
              href={`#project-${project.number}`}
              key={project.number}
              id={`project-${project.number}`}
            >
              <div className={`project-image ${project.shape}`}>
                <img src={project.image} alt={project.alt} />
                <span className="image-index">{project.number}</span>
              </div>

              <div className="project-info">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.location}</p>
                </div>
                <span className="project-year">{project.year}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow">A LITTLE ABOUT THE WORK</p>
        <div className="about-content">
          <h2>
            Looking closer
            <br />
            at the everyday.
          </h2>
          <p>
            An independent photography practice exploring people, places,
            architecture and the small moments in between.
          </p>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <a className="wordmark" href="#home">
          GUILLERMO GAMÓN
        </a>

        <a
          className="text-link"
          href="mailto:hello@example.com"
        >
          GET IN TOUCH ↗
        </a>

        <span className="copyright">
          © {new Date().getFullYear()} GUILLERMO GAMÓN
        </span>
      </footer>
    </main>
  );
}
