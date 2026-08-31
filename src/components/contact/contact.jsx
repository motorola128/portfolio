import "./contact.css";
import { MailIcon, GithubIcon, LinkedinIcon } from "../icons";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-label center">
        <span className="section-number">03</span>
        <span className="section-line"></span>
        <span className="section-tag">Get In Touch</span>
      </div>

      <h2 className="section-heading">Let's Connect</h2>

      <p className="contact-intro">
      
        Feel free to reach out if you'd like to work together.
      </p>

      <div className="contact-buttons">
        <a href="mailto:motorola12858@gmail.com" className="contact-btn primary-btn">
          <MailIcon width={18} height={18} />
          Email Me
        </a>

        <a
          href="https://github.com/motorola128"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <GithubIcon width={18} height={18} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jwelana"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          <LinkedinIcon width={18} height={18} />
          LinkedIn
        </a>
      </div>

      <p className="copyright">© 2026 Jwelana. All Rights Reserved.</p>
    </section>
  );
}

export default Contact;
