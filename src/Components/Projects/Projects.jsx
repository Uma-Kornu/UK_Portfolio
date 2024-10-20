import React, { useState } from 'react';
import './Projects.css';

const projectData = {
  Dashboards: [
    { title: 'Dashboard Project 1', description: 'Description of Dashboard Project 1' },
    { title: 'Dashboard Project 2', description: 'Description of Dashboard Project 2' },
  ],
  MachineLearning: [
    { title: 'ML Project 1', description: 'Description of ML Project 1' },
    { title: 'ML Project 2', description: 'Description of ML Project 2' },
  ],
  // DeepLearning: [
  //   { title: 'DL Project 1', description: 'Description of DL Project 1' },
  //   { title: 'DL Project 2', description: 'Description of DL Project 2' },
  // ],
  // NLP: [
  //   { title: 'NLP Project 1', description: 'Description of NLP Project 1' },
  //   { title: 'NLP Project 2', description: 'Description of NLP Project 2' },
  // ],
};

const ProjectTile = ({ category, selectedCategory, onClick }) => (
  <div
    className={`project-tile ${selectedCategory === category ? 'active' : ''}`}
    onClick={() => onClick(category)}
  >
    <h3>{category}</h3>
  </div>
);

const ProjectList = ({ projects }) => (
  <div className="project-list">
    {projects.map((project, index) => (
      <div key={index} className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleTileClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id = 'projects' className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {Object.keys(projectData).map((category) => (
          <ProjectTile
            key={category}
            category={category}
            selectedCategory={selectedCategory}
            onClick={handleTileClick}
          />
        ))}
      </div>
      {selectedCategory && (
        <ProjectList projects={projectData[selectedCategory]} />
      )}

    </div>
  );
};

export default Projects;
