import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div id = 'resume' className='Resume'>
        <section className='section'>
            <h2>Experience</h2>
            <div className="experience">
                <h3>Data Science Research Assistant</h3>
                <h3>Georgia State University</h3>
                <p className="experience-period">February 2024 - Present</p>
                <p className="experience-location">Atlanta, GA</p>
                <ul>
                    <li>Constructed hypergraphs from Stack Overflow blog network data using Graph Embeddings to capture user-content relationships.</li>
                    <li>Employing algorithms to model information diffusion across hypergraphs and conducting simulations on these generated hypergraphs to identify the most proficient users in Stack Overflow within various domains.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Data Science Graduate Research Assistant</h3>
                <h3>Institute for Insight</h3>
                <p className="experience-period">August 2023 - December 2023</p>
                <p className="experience-location">Atlanta, GA</p>
                <ul>
                    <li>Constructed predictive models like Decision Trees and XGBoost, achieving an accuracy of 82%.Analyzed strategies to enhance customer sales closure rates through statistical modeling and Optimized inventory levels to maximize profit by 5%.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Data Engineer Intern</h3>
                <h3>Honeywell</h3>
                <p className="experience-period">May 2023 - August 2023</p>
                <p className="experience-location">Atlanta, GA</p>
                <ul>
                    <li>Facilitated the maintenance of an ETL pipeline, increasing efficiency by 25%, to extract, transform, and load data from fire panels and detectors into Microsoft SQL Server for improved storage and analysis.</li>
                    <li>Partnered with cross-functional teams to analyze reports and build interactive Tableau dashboards for effective communication of data driven insights to stakeholders, resulting in a 10% acceleration of project timelines.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Data Science Graduate Research Assistant</h3>
                <h3>Institute for Insight</h3>
                <p className="experience-period">August 2022 - April 2023</p>
                <p className="experience-location">Atlanta, GA</p>
                <ul>
                    <li>Streamlined advanced feature selection techniques to identify critical features and implemented ML algorithms, such as Support Vector Machine and Logistic Regression, for call center data analysis, enhancing efficiency and reducing customer wait times by 20%.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Senior Consultant</h3>
                <h3>Ernst & Young LLP</h3>
                <p className="experience-period">January 2022 - August 2022</p>
                <p className="experience-location">Banglore, India</p>
                <ul>
                    <li>Created comprehensive BI reports leveraging Power BI to visually represent test plans based on functional and API requirements, ensuring 100% test coverage, and providing stakeholders and Product Owners with clear insights into project progress.</li>
                    <li>Attained a 20% reduction in testing efforts by generating test data with over 500 parameters using advanced Excel functions.</li>
                    <li>Mentored a team of 3 testers in developing and implementing a regression testing framework in Python, improving efficiency by 10%.</li>
                </ul>
            </div>
            <div className="experience">
                <h3>Test Automation Senior Analyst</h3>
                <h3>Accenture Solutions</h3>
                <p className="experience-period">July 2021 - December 2021</p>
                <p className="experience-location">Banglore, India</p>
                <ul>
                    <li>Coordinated end-to-end testing within an agile scrum team, leveraging Azure DevOps for project management throughout the SDLC</li>
                    <li>Achieved 80% accuracy in validating material creation requests by writing SQL queries to ensure data governance and integrity.</li>   
                </ul>
            </div>
            <div className="experience">
                <h3>Technology Analyst</h3>
                <h3>Infosys Limited</h3>
                <p className="experience-period">May 2016 - July 2021</p>
                <p className="experience-location">Banglore, India</p>
                <ul>
                    <li>Managed testing team efforts and reports for 5+ modules in the Goods and Service Tax project, overseeing a team of 8 members.</li>
                    <li>Designed and executed automated regression scripts using Selenium, reducing the probability of production regression defects by 40%.</li>
                    <li>Developed advanced SQL scripts to perform integration testing ensuring data accuracy in the database, supporting data analysis.</li>
                    <li>Spearheaded defect triage meetings, enhancing cross-functional team communication and reducing defect resolution time by 60% using interactive Power BI dashboards.</li>
                    <li>Integrated metrics like defect backlog, defect aging to visualize and analyze defect trends.</li>
                    <li>Implemented Python scripts to execute test plans for API and functional cases for validating the application hosted on AWS EC2.</li>
                </ul>
            </div> 

        </section>
        <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master's in Data Science and Analytics | Georgia State University</h3>
          <p className="education-date">August 2022- December 2023</p>
          <p>GPA: 3.8/4.0</p>
        </div>

        <div className="education">
          <h3>Bachelor of Technology in Chemical Engineering| Andhra University</h3>
          <p classame="education-date">September 2012 - March 2016</p>
          <p>GPA: 8.67/10.0</p>
        </div>
      </section>

    </div>
  )
}

export default Resume