import { useState } from "react";
import "./projects.css";
import { ArrowUpRightIcon } from "../icons";

const projectsData = [
 
  {
    title: "LaunchIQ",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    summary:
      "An analytics platform for understanding product launch performance using customer review data.",
    description:
      "Identified a critical business problem — a 70% product launch failure rate — and built an end-to-end data pipeline processing 65,000+ Amazon reviews to quantify which product attributes drive market success. Translated complex ML outputs (AUC 0.88) into clear business recommendations using SHAP, enabling non-technical product managers to make data-driven launch decisions. Conducted custom analysis across 280 product categories and built a live dashboard for knowledge sharing across teams.",
    tags: "Python • FastAPI • React • SHAP • Data Analytics",
    link: "https://github.com/motorola128/LaunchIQ",
  },
  {
    title: "REFLECT",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80",
    summary:
      "A journaling platform that supports text, audio, and video reflections in one place.",
    description:
      "Designed a scalable cross-platform journaling platform supporting secure text, audio, and video content. Improved media retrieval efficiency using cloud storage and an optimized NoSQL metadata structure. Translated functional requirements into modular application components and applied structured problem-solving to build reusable, extensible architecture.",
    tags: "React • Python • Supabase",
    link: "https://github.com/motorola128/Reflect-Journel-application",
  },
  {
    title: "Global Data Jobs Market Analysis & Dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    summary:
      "A dashboard that explores global salary and skill demand trends in the data jobs market.",
    description:
      "Performed end-to-end ETL on a 2023–2024 global data jobs dataset, using Power Query to clean data, build table relationships, and create calculated DAX measures. Developed interactive dashboards in Excel and Power BI with KPIs, drill-through features, and geographic visuals to uncover global salary and skill demand trends.",
    tags: "Python • Power BI • Excel • Data Analytics",
    link: "https://github.com/motorola128/Excel",
  },
  {
    title: "SQL Data Warehouse & Analytics Project",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
    summary:
      "An end-to-end SQL project covering data warehousing and analytics, from raw ERP/CRM data to business insights.",
    description:
      "Built a data warehouse in SQL Server using the Medallion Architecture (Bronze, Silver, Gold layers) to consolidate ERP and CRM sales data into a clean star schema. Wrote SQL scripts for data cleansing, transformation, and modeling, then used the warehouse to analyze customer behavior, product performance, and sales trends.",
    tags: "SQL • SQL Server • ETL • Data Modeling • Data Analytics",
    link: "https://github.com/motorola128/sql_projects",
  },
{
  title: "ACME Insurance Cost Prediction",

  image:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",

  summary:
    "An end-to-end machine learning solution for predicting individual medical insurance charges using demographic and lifestyle factors.",

  description:
    "Developed an end-to-end regression pipeline to predict medical insurance charges. Performed exploratory data analysis, data preprocessing, feature engineering, model training, and performance evaluation using multiple machine learning algorithms. Selected and saved the best-performing model, built a reusable prediction function, and structured the project for deployment and real-world inference.",

  tags: "Python • Pandas • NumPy • Scikit-learn • EDA • Regression • Streamlit",

  link: "https://github.com/motorola128/ACME-Insurance",
},
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="projects-header reveal">
        <div className="section-label">
          <span className="section-number">02</span>
          <span className="section-line"></span>
          <span className="section-tag">Selected Work</span>
        </div>
        <h2 className="section-heading">Projects</h2>
        <p className="section-subtitle">
          Some of my data analytics and web development projects.
        </p>
      </div>

      <div className="project-grid">
        {projectsData.map((project, i) => (
          <div
            className="project-card reveal"
            key={project.title}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-image-overlay"></div>
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="project-tags">
                {project.tags.split("•").map((tag) => (
                  <span className="tag-pill" key={tag}>
                    {tag.trim()}
                  </span>
                ))}
              </div>

              <button onClick={() => setActiveProject(project)}>
                View Project
                <ArrowUpRightIcon />
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="project-modal" onClick={() => setActiveProject(null)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <a href={activeProject.link} target="_blank" rel="noreferrer">
              Open Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;