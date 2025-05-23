import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import projectsData from "../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <main className="projects">
      <h2>Mes projets</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>

      
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.type === "site" ? "Voir le site" : "Voir sur GitHub"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;

