import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="heroInner">
        <div className="heroLeft">
          <span className="availability">
            <span className="dot"></span>
            Open to Data Analyst opportunities
          </span>

          <h2>HI, I'M</h2>
          <h1>Jwelana</h1>
          <h3>Aspiring Data Analyst</h3>

          <p>
            I enjoy transforming raw data into meaningful insights through
            analytics, dashboards, and machine learning.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary">
              View Projects
            </a>
            <a
              href="https://github.com/motorola128"
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jwelana-m-346b30365"
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="heroRight">
          <div className="avatarRing">
            <div className="avatarCore">JW</div>
          </div>
          <div className="floatCard card1">
            <span className="floatEmoji">📊</span>
            <span>Data Analytics</span>
          </div>
          <div className="floatCard card2">
            <span className="floatEmoji">🤖</span>
            <span>Machine Learning</span>
          </div>
          <div className="floatCard card3">
            <span className="floatEmoji">🗃️</span>
            <span>SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
