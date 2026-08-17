import { useState } from "react";
import "./projects.css";

const projectsData = [
 
  {
    title: "LaunchIQ",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    summary:
      "An analytics platform for understanding product launch performance using customer review data.",
    description:
      "Identified a critical business problem — a 70% product launch failure rate — and built an end-to-end data pipeline processing 65,000+ Amazon reviews to quantify which product attributes drive market success. Translated complex ML outputs (AUC 0.88) into clear business recommendations using SHAP, enabling non-technical product managers to make data-driven launch decisions. Conducted custom analysis across 280 product categories and built a live dashboard for knowledge sharing across teams.",
    tags: "Python • FastAPI • React • SHAP • Data Analytics",
    link: "https://github.com/motorola128",
  },
  {
    title: "REFLECT",
    image:
      "https://miro.medium.com/v2/resize%3Afit%3A1400/1%2ALiXg_PUHnDGBXWM75OSBYQ.jpeg",
    summary:
      "A journaling platform that supports text, audio, and video reflections in one place.",
    description:
      "Designed a scalable cross-platform journaling platform supporting secure text, audio, and video content. Improved media retrieval efficiency using cloud storage and an optimized NoSQL metadata structure. Translated functional requirements into modular application components and applied structured problem-solving to build reusable, extensible architecture.",
    tags: "React • Python • Supabase",
    link: "https://github.com/motorola128",
  },
  {
    title: "Global Data Jobs Market Analysis & Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    summary:
      "A dashboard that explores global salary and skill demand trends in the data jobs market.",
    description:
      "Performed end-to-end ETL on a 2023–2024 global data jobs dataset, using Power Query to clean data, build table relationships, and create calculated DAX measures. Developed interactive dashboards in Excel and Power BI with KPIs, drill-through features, and geographic visuals to uncover global salary and skill demand trends.",
    tags: "Python • Power BI • Excel • Data Analytics",
    link: "https://github.com/motorola128",
  },
  {
    title: "SQL Data Warehouse & Analytics Project",
    image:
      "https://3.bp.blogspot.com/-xtomFYg10PM/W_14GXQsN3I/AAAAAAAAAyw/2nrI0iF9OqYX3BOaYLjoH_2VsSYvAB4dwCLcBGAs/s1600/7.png",
    summary:
      "An end-to-end SQL project covering data warehousing and analytics, from raw ERP/CRM data to business insights.",
    description:
      "Built a data warehouse in SQL Server using the Medallion Architecture (Bronze, Silver, Gold layers) to consolidate ERP and CRM sales data into a clean star schema. Wrote SQL scripts for data cleansing, transformation, and modeling, then used the warehouse to analyze customer behavior, product performance, and sales trends.",
    tags: "SQL • SQL Server • ETL • Data Modeling • Data Analytics",
    link: "https://github.com/motorola128",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <p className="project-subtitle">
        Some of my data analytics and web development projects.
      </p>

      <div className="project-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.summary}</p>

            <span>{project.tags}</span>

            <button onClick={() => setActiveProject(project)}>View Project</button>
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