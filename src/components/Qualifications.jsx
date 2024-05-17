import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'; // Import icons

const Qualifications = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  const toggleCollapse1 = () => {
    setCollapse1(!collapse1);
  };

  const toggleCollapse2 = () => {
    setCollapse2(!collapse2);
  };

  const toggleCollapse3 = () => {
    setCollapse3(!collapse3);
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
          <div className="row">
            <div className="col">
              <button className="btn btn-black btn-lg d-flex justify-content-between align-items-center" onClick={toggleCollapse1}>
                <span>Certifications</span>
                {collapse1 ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <div className={`collapse ${collapse1 ? 'show' : ''}`}>
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
              <button className="btn btn-black btn-lg d-flex justify-content-between align-items-center" onClick={toggleCollapse2}>
                <span>Platform Experience</span>
                {collapse2 ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <div className={`collapse ${collapse2 ? 'show' : ''}`}>
                <div className="card card-body mt-2 collapse-content">
                  Content for second collapse...
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <button className="btn btn-black btn-lg d-flex justify-content-between align-items-center" onClick={toggleCollapse3}>
                <span>Professional Skills</span>
                {collapse3 ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <div className={`collapse ${collapse3 ? 'show' : ''}`}>
                <div className="card card-body mt-2 collapse-content">
                  Content for third collapse...
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 resume-btn">
            <div className="col">
              <a href="/path/to/your/resume.pdf" download className="btn btn-lg custom-button about-me-text">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
