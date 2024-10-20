import React from 'react';
import './Experience.css';
import GSU_Img from "../../assets/GSU.png"
import Honeywell_Img from "../../assets/Honeywell.jpg"
import EY_Img from "../../assets/EY.png"
import Accenture_Img from "../../assets/Accenture.png"
import Infosys_Img from "../../assets/Infosys.png"



const experiences = [
  {
    title: 'Research Assistant',
    company: 'Georgia State University',
    date: 'February 2024 - Present',
    description: ['Developed hypergraphs from Stack Overflow blog data using Graph Embeddings and algorithms like PageRank and Louvain Modularity to analyze information diffusion and identify top users across different domains.'],
    icon: {GSU_Img}
  },
  {
    title: 'Graduate Research Assistant',
    company: 'Institute for Insight',
    date: 'August 2023 - December 2023',
    description: [
      'Developed predictive models, including Decision Trees and XGBoost, achieving 82% accuracy, while using statistical analysis to improve sales closure rates and optimize inventory levels, increasing profits by 5%.'
    ],
    icon: {GSU_Img}
  },
  {
    title: 'Data Engineer Intern',
    company: 'Honeywell',
    date: 'May 2023 - August 2023',
    description: [
        'Improved efficiency of an ETL pipeline by 25% for data extraction into SQL Server and accelerated project timelines by 10% through collaboration on interactive Tableau dashboards with cross-functional teams.'
    ],
    icon: {Honeywell_Img}
  },
  {
    title: 'Graduate Research Assistant',
    company: 'Institute for Insight',
    date: 'August 2022 - April 2023',
    description: [
        "Implemented advanced feature selection and ML algorithms, including Support Vector Machine and Logistic Regression, to analyze call center data, reducing wait times by 20% and increasing call handling capacity by 30% through SARIMA forecasting."
    ],
    icon: {GSU_Img}
  },
  {
    title: 'Senior Consultant',
    company: 'Ernst & Young LLP',
    date: 'January 2022 - August 2022',
    description: [
        'Developed BI reports in Power BI for full test coverage, reduced testing efforts by 20% through advanced Excel data generation, and mentored testers on a Python regression framework, enhancing efficiency by 10%.'
    ],
    icon: {EY_Img}
  },
  {
    title: 'Senior Test Automation Analyst',
    company: 'Accenture',
    date: 'July 2021 - December 2021',
    description: [
        'Collaborated with Shell to coordinate end-to-end testing in an agile scrum team, utilizing Azure DevOps for project management and achieving 80% accuracy in validating material creation requests through SQL queries to maintain data governance and integrity.'
    ],
    icon: {Accenture_Img}
  },
  {
    title: 'Technology Analyst',
    company: 'Infosys',
    date: 'May 2021 - July 2021',
    description: [
        'Led testing efforts for national interest projects like GST implementation, reducing defects by 40%, improving resolution time by 60%, and delivering actionable insights to stakeholders using Power BI and Tableau.'
    ],
    icon: {Infosys_Img}
  },
];

const Experience = () => {
  return (
    <div id = 'experience' className="timeline">
        <h1 className="timeline-title">Career Timeline</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-icon">
            <img src={exp.icon} alt={exp.company} />
          </div>
          <div className="timeline-content">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <h5>{exp.date}</h5>
            <ul>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
