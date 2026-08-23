import "./skill.css";

const skillsData = [
  { icon: "💻", title: "Programming", items: "Python, SQL, JavaScript" },
  { icon: "📈", title: "Data Analysis", items: "Pandas, NumPy, Excel" },
  { icon: "📊", title: "Visualization", items: "Power BI, Matplotlib" },
  { icon: "🤖", title: "Machine Learning", items: "Scikit-learn, XGBoost" },
  { icon: "🗄️", title: "Database", items: "MySQL, PostgreSQL" },
  { icon: "🌐", title: "Web Development", items: "React, HTML, CSS" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <span className="section-eyebrow">What I Work With</span>
        <h2 className="section-heading">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build data-driven solutions.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
