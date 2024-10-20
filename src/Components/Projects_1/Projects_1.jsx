import React, { useState } from 'react';
import './Projects_1.css';
import HR_Analytics from "../../../public/HR_Analytics.png"
import Ecom_Analysis from "../../../public/Ecommerce_Analysis.png"
import ER_Dashboard from "../../../public/Emergency_Room_Dashboard.png"


// Define the project details with image, title, description, and skills used
const projectsData = [
    {
        id: 'Project1',
        title: 'HR Attrition Analysis',
        description: 'Analysis of HR attrition using dashboard visuals and key insights.',
        image: {HR_Analytics}, 
        skills: 'Tableau, Data Visualization, HR Analytics, Dashboards',
    },
    {
        id: 'Project2',
        title: 'E-Commerce Analysis',
        description: 'Data analysis of product sales across regions for e-commerce platforms.',
        image: {Ecom_Analysis}, 
        skills: 'PowerBI, Data Cleaning, Data Visualisation',
    },
    {
        id: 'Project3',
        title: 'Emergency Room Visit Dashboard',
        description: 'Emergency Room Visits Dashboard visualizing patient demographics, wait times, satisfaction, and referral data.',
        image: {ER_Dashboard}, 
        skills: 'Tableau, Data Analysis, BI Reports',
    }
];

const Projects = () => {
    const [flippedProject, setFlippedProject] = useState(null);

    const handleFlip = (projectId) => {
        setFlippedProject(projectId === flippedProject ? null : projectId);
    };

    return (
        <div id = "projects" className="projects-container">
          <div className="project-title">
          <h1>Projects</h1>
          </div>
            {projectsData.map((project) => (
                <div 
                    key={project.id} 
                    className={`project-tile ${flippedProject === project.id ? 'flipped' : ''}`} 
                    onClick={() => handleFlip(project.id)}
                >
                    <div className="project-tile-inner">
                        {/* Front side showing the image */}
                        <div className="project-tile-front">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                        {/* Back side showing the skills */}
                        <div className="project-tile-back">
                            <h3>{project.title}</h3>
                            <p>{project.skills}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
