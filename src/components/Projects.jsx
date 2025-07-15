import React from 'react';
import './projects.css'; // Include the custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import gfgLogo from '../assets/gfgLogo.png';
import pro from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import pro21 from '../assets/pro21.png'
import pro3 from '../assets/pro3.png'
import pro4 from '../assets/pro4.png'
import pro5 from '../assets/pro5.png'
import pro6 from '../assets/pro6.png'
import pro7 from '../assets/pro7.png'
const projectsData = [
  {
    title: "Brain Tumor Detection",
    technologies: ["Machine Learning", "Deep Learning","Python"],
    description: "An Assistant Ai-Machine Learning Model for detecting brain tumors from MRI scans, helping doctors make quicker and more accurate diagnoses which can reduce human errors.",
    githubLink: "https://github.com/KAdithyaReddy/Brain-Tumor-Classification-Using-Pure-Machine-Learning-Models",
    status: "Completed",
    image: pro,  
  },
  {
  title: "Sahayam Care",
  technologies: ["HTML", "CSS", "JavaScript", "MERN Stack", "GitHub Pages"],
  description: "SahayamCare is a web-based platform designed to simplify access to elderly care services, daily assistance, and emergency support. Built with a focus on user-friendliness and accessibility, it aims to connect families with trusted service providers for senior citizens.",
  githubLink: "https://github.com/KAdithyaReddy/SahayamCare",
   deploymentLink: "https://sahayamcare.com/",
  status: "Completed",
    image: pro2,
  },
  
{
    title: "Smart Crop Predictor", 
    technologies: ["Machine Learning", "Embedded Systems","Micro Python"],
    description: "A smart crop recommendation Device that uses environmental data to help farmers choose the best crops to grow, boosting the returns generated from crops using machine learning.",
    githubLink: "https://github.com/SamiKhaji/Smart-Crop-Predictor",
    status: "Completed",
    image: pro21,
  },
  {
    title: "Portfolio Website",
    technologies: ["React JS","HTML", "CSS","JSX"],
    description: "A sleek and responsive portfolio app designed with React JS, ensuring seamless compatibility across all devices. It's a perfect showcase of my projects and skills, offering an intuitive and visually appealing experience.",
  githubLink: "https://github.com/KAdithyaReddy/Portfolio?tab=readme-ov-file",
    
    status: "Completed",
    image:pro6,
  },
  {
    title: "Cold Mail Genie",
    technologies: ["Streamlit", "Generative AI","Langchain","Python"],
    description: "A generative AI app that automates personalized cold email creation, streamlining client outreach and boosting engagement.",
    githubLink: "https://github.com/SamiKhaji/ColdMail_Genie",
    deploymentLink: "https://coldmailgenie-9zwd5wj6oum6u4jkas7cj6.streamlit.app/",
    status: "Completed",
    image: pro4,
  },
  
  {
    title: "Sales Data Analysis",
    technologies: ["Power BI", "Excel","Data Analytics"],
    description: "An advanced sales forecasting model that turns raw data into valuable insights, helping businesses optimize inventory and strategy.",
    deploymentLink: "https://www.dropbox.com/scl/fi/3xgie2u8gt22m8oil95ld/Sales_project_DA.pdf?rlkey=dgiiwe1ygo3h8orbz7o6ssij2&st=5y39aaw6&dl=0",
    githubLink: "https://github.com/SamiKhaji/Store-Sales-Analysis",
    status: "Completed",
    image: pro3,
  },
  
];

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return <FontAwesomeIcon icon={faCheckCircle} className="icon-status-completed-icon" title="Completed" />;
    case "In Progress":
      return <FontAwesomeIcon icon={faSpinner} className="status-progress-icon" spin title="In Progress" />;
    default:
      return null;
  }
};

const Projects = ({isNightMode}) => {
  return (
    <div id="projects" className={`projects-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <p key={idx} className="tech-chip">
                  {tech}
                </p>
              ))}
            </div>
            <p className="short-description">{project.description}</p>
            <div className="project-icons">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FontAwesomeIcon icon={faGithub} className="icon-github-icon" title="GitHub" />
                  
                </a>
              )}
              {project.deploymentLink && (
                <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FontAwesomeIcon icon={faGlobe} className="icon-deployment-icon" title="Deployed Site" />
                </a>
              )}
              <p className="status-icon">{getStatusIcon(project.status)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
