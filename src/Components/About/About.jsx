import React from 'react'
import './About.css'
import Profile_pic from '../../assets/Profile_pic.jpg'
import Github from '../../assets/github_logo.png'
import { DiGithubBadge } from "react-icons/di";
import {BsLinkedin} from "react-icons/bs"
import { IconContext } from "react-icons";
import { AiOutlineDownload } from "react-icons/ai";

import AnchorLink from 'react-anchor-link-smooth-scroll'
const About = () => {
  return (
    <div id='about' className='about'>
        <div>
            
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Profile_pic} alt="" />
                <IconContext.Provider value={{className:"react-icons"}}>
                    <a href='https://github.com/Uma-Kornu' target='_blank' rel='noopener noreferrer'>
                        <DiGithubBadge />
                    </a>
                    <a href='https://www.linkedin.com/in/uma-kornu' target='_blank' rel='noopener noreferrer'>
                        <BsLinkedin />
                    </a>
                    <a href="/Uma_Kornu_Resume.pdf" download className='about-resume'>
                        <AiOutlineDownload/>
                    </a>
                </IconContext.Provider>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <h1>Hi! I'm Uma Kornu</h1>
                    <p>I am a data professional with a strong background in Quality Assurance and Data Science, holding a Master’s degree in Data Science and Analytics. My experience spans 6 years in IT Quality Assurance and over 2 years as a Data Science Research Assistant. Proficient in Python, R, and SQL, I have expertise in managing large datasets, data cleaning, and visualization using tools like Tableau, Alteryx, and Power BI. My work is driven by a passion for uncovering actionable insights and delivering data-driven solutions that propel business success.</p>
                    <p>I am available for full-time Data Scientist and Data Analyst roles.</p>
                </div>
                
                {/* <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>R</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>MachineLearning</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>DeepLearning</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>Tableau</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>PowerBI</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Alteryx</p><hr style={{width:"50%"}} /></div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default About