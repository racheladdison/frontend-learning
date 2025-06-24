import React from "react";
import "./Projects.css";
import "./General.css";
// import project1 from "../assets/project1.png";
// import project2 from "../assets/project2.png";
// import project3 from "../assets/project3.png";
// import project4 from "../assets/project4.png";

const Projects: React.FC = () => {
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&w=600&q=80",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of Project Four.",
    image: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&w=600&q=80",
  },
];

  return (
    <section id="projects" className="component">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;