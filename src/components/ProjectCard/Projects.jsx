import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../Data/Data";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>
        Selected <span style={{ color: "var(--page-accent)" }}>Projects</span>
      </h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            title={project.title}
            des={project.des}
            iconLists={project.iconLists}
            link={project.link}
            git={project.git}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
