// components/Qualifications.jsx
import React from 'react';

const Qualifications = () => {
  return (
    <section id="qualifications">
      <div className="container">
        <h2>Qualifications</h2>
        <div className="qualification">
          <h3>Education</h3>
          <ul>
            <li>Bachelor's Degree in Computer Science - University Name, Year</li>
            {/* Add more education qualifications as needed */}
          </ul>
        </div>
        <div className="qualification">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>HTML5 & CSS3</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
        <div className="qualification">
          <h3>Certifications</h3>
          <ul>
            <li>Certified React Developer - Certification Body, Year</li>
            {/* Add more certifications as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
