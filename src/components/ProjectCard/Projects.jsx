import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../Data/Data";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <h1>
        My <span style={{ color: "#9ee406" }}>Projects</span>
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
