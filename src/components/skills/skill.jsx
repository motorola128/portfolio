import "./skill.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Skills</h2>

      <p className="skill-subtitle">
        Technologies and tools I use to build data-driven solutions.
      </p>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Programming</h3>
          <p>Python, SQL, JavaScript</p>
        </div>

        <div className="skill-card">
          <h3>Data Analysis</h3>
          <p>Pandas, NumPy, Excel</p>
        </div>

        <div className="skill-card">
          <h3>Visualization</h3>
          <p>Power BI, Matplotlib</p>
        </div>

        <div className="skill-card">
          <h3>Machine Learning</h3>
          <p>Scikit-learn, XGBoost</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>MySQL, PostgreSQL</p>
        </div>

        <div className="skill-card">
          <h3>Web Development</h3>
          <p>React, HTML, CSS</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;