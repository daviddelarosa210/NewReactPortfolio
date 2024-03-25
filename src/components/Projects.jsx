// components/Projects.jsx
import React from 'react';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'project1.jpg', // Image file should be located in your public folder
      link: 'https://github.com/example/project1' // Link to project or source code
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'project2.jpg',
      link: 'https://github.com/example/project2'
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
