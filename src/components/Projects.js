import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";
import "./Projects.css"; // Updated CSS

function Projects() {
  const [listProjects] = useState([
    {
      name: "E waste Collection and recycling app",
      github: "https://github.com/dhar127/Ewaste_customer.git",
      language: "Api interaction,Python, React",
    },
    {
      name: "A Comprehensive Online Platform",
      github: "https://github.com/dhar127/SeaGrow.git",
      language: "Javascript, React",
    },
    {
      name: "Movie Application System",
      github: "https://github.com/dhar127/Movie_Application_frontend.git",
      language: "Python, React",
    },
    {
      name: "Payroll Management System",
      github: "https://github.com/dhar127/mjit_intern.git",
      language: "Java, Spring Boot",
    },
    {
      name: "Weather Application System",
      github: "https://github.com/dhar127/Weather_Application.git",
      language: "JavaScript, React",
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="projects" ref={scrollTab}>
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {listProjects.map((project, index) => (
          <article
            className="project-item"
            key={index}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="project-info">
              <h3>{project.name}</h3>
             
              <div className="languages-detail">
                <h4>Languages</h4>
                <p>{project.language}</p>
              </div>
              <a
                className="github-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
