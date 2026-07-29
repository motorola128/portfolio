import "./contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Let's Connect</h2>

      <p className="contact-intro">
        I'm currently looking for Data Analyst opportunities.
        Feel free to reach out if you'd like to work together.
      </p>

      <div className="contact-buttons">

        <a
          href="mailto:yourmail@gmail.com"
          className="contact-btn"
        >
          Email Me
        </a>

        <a
          href="https://github.com/motorola128"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jwelana-m-346b30365"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          LinkedIn
        </a>

      </div>

      <p className="copyright">
        © 2026 Jwelana. All Rights Reserved.
      </p>

    </section>
  );
}

export default Contact;