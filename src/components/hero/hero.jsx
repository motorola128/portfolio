import "./hero.css";
import { GithubIcon, LinkedinIcon, FileTextIcon } from "../icons";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="grain"></div>

      <div className="heroInner">
        <p className="hero-kicker reveal">Data Analyst &amp; ML Enthusiast</p>

        <h1 className="reveal" style={{ transitionDelay: "0.08s" }}>
          Hi, I'm <span className="hero-name">Jwelana</span>
        </h1>

        <div className="hero-rule reveal" style={{ transitionDelay: "0.14s" }}></div>

        <p className="hero-copy reveal" style={{ transitionDelay: "0.18s" }}>
          I turn raw, messy data into clear decisions — building analytics
          pipelines, dashboards, and machine learning models that people
          actually use to make better calls.
        </p>

        <div className="buttons reveal" style={{ transitionDelay: "0.26s" }}>
          <a href="#projects" className="primary">
            View My Work
          </a>
          <a
            href="https://github.com/motorola128"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jwelana"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>

      <a href="#skills" className="scroll-cue" aria-label="Scroll to skills">
        <span>Scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.4" />
          <circle className="scroll-dot" cx="7" cy="6" r="2" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
