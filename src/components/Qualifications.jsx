import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Qualifications = () => {
  const [collapseCertifications, setCollapseCertifications] = useState(false);
  const [collapseLanguages, setCollapseLanguages] = useState(false);
  const [collapsePlatformExperience, setCollapsePlatformExperience] = useState(false);
  const [collapseProfessionalSkills, setCollapseProfessionalSkills] = useState(false);

  const toggleCollapseCertifications = () => {
    setCollapseCertifications(!collapseCertifications);
  };

  const toggleCollapseLanguages = () => {
    setCollapseLanguages(!collapseLanguages);
  };

  const toggleCollapsePlatformExperience = () => {
    setCollapsePlatformExperience(!collapsePlatformExperience);
  };

  const toggleCollapseProfessionalSkills = () => {
    setCollapseProfessionalSkills(!collapseProfessionalSkills);
  };

  return (
    <section id="qualifications" className='q-page'>
      <div className='row no-gutters'>
        <div className='col'>
          <h2 id='q-header'>What I bring to the table…</h2>
        </div>
      </div>
      <div className="container">
        <div className="qualification">
          <div className="row mt-2">
            <div className="col">
              <button className="btn btn-black btn-lg d-flex justify-content-between align-items-center" onClick={toggleCollapseCertifications}>
                <span>Certifications</span>
                {collapseCertifications ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <div className={`collapse ${collapseCertifications ? 'show' : ''}`}>
                <div className="card card-body mt-2 collapse-content">
                  <ul className="certifications-list col-md-8">
                    <h4>The University of Texas at San Antonio, School of Data Science</h4>

                    <h4>Coding Bootcamp Certification</h4>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-black btn-lg d-flex justify-content-between align-items-center" onClick={toggleCollapseLanguages}>
                <span>Languages</span>
                {collapseLanguages ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <div className={`collapse ${collapseLanguages ? 'show' : ''}`}>
                <div className="card card-body mt-2 collapse-content">
                  <ul className="certifications-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>API</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL & NoSQL</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <button className="btn btn-black btn-lg d-flex justify-content-between align-items-center" onClick={toggleCollapsePlatformExperience}>
                <span>Platform Experience</span>
                {collapsePlatformExperience ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <div className={`collapse ${collapsePlatformExperience ? 'show' : ''}`}>
                <div className="card card-body mt-2 collapse-content">
                  <ul className="certifications-list">
                    <li>Visual Studio Code</li>
                    <li>Bootstrap</li>
                    <li>Atom</li>
                    <li>Github</li>
                    <li>Gitlab</li>
                    <li>Heroku</li>
                    <li>Insomnia</li>
                    <li>MongoDB Compass</li>
                    <li>Handlebars</li>
                    <li>Postman</li>
                    <li>Slack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <button className="btn btn-black btn-lg d-flex justify-content-between align-items-center" onClick={toggleCollapseProfessionalSkills}>
                <span>Professional Skills</span>
                {collapseProfessionalSkills ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <div className={`collapse ${collapseProfessionalSkills ? 'show' : ''}`}>
                <div className="card card-body mt-2 collapse-content">
                  <ul className="certifications-list">
                    <li>Front-End Development</li>
                    <li>Back-End Development</li>
                    <li>Version Control and Deployment</li>
                    <li>Integrated Development Environments</li>
                    <li>Testing</li>
                    <li>Debugging</li>
                    <li>Gitflow</li>
                    <li>Project Management</li>
                    <li>Team Collaboration</li>
                    <li>Problem Solving</li>
                    <li>Time Management</li>
                    <li>Adaptability</li>
                    <li>Organization</li>
                    <li>Critical Thinking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 resume-btn">
            <div className="col">
              <a href="/Davids-resume.pdf" download className="btn btn-lg custom-button about-me-text">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
