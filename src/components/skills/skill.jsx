import "./skill.css";
import {
  CodeIcon,
  ChartIcon,
  PulseIcon,
  NetworkIcon,
  DatabaseIcon,
  LayersIcon,
} from "../icons";

const skillsData = [
  { Icon: CodeIcon, title: "Programming", items: "Python, SQL, JavaScript" },
  { Icon: ChartIcon, title: "Data Analysis", items: "Pandas, NumPy, Excel" },
  { Icon: PulseIcon, title: "Visualization", items: "Power BI, Matplotlib" },
  { Icon: NetworkIcon, title: "Machine Learning", items: "Scikit-learn, XGBoost" },
  { Icon: DatabaseIcon, title: "Database", items: "MySQL, PostgreSQL" },
  { Icon: LayersIcon, title: "Web Development", items: "React, HTML, CSS" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header reveal">
        <div className="section-label">
          <span className="section-number">01</span>
          <span className="section-line"></span>
          <span className="section-tag">What I Work With</span>
        </div>
        <h2 className="section-heading">Skills &amp; Tools</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build data-driven solutions.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <div
            className="skill-card reveal"
            key={skill.title}
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <div className="skill-icon">
              <skill.Icon />
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
