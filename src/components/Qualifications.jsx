import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This file includes both Bootstrap JavaScript and jQuery
// Importing $ from jQuery is not necessary here because it's already included in bootstrap.bundle.min.js

const Qualifications = () => {
  useEffect(() => {
    // Bootstrap dropdowns should be initialized automatically by bootstrap.bundle.min.js, so you don't need to manually call it
  }, []);

  return (
    <section id="qualifications">
      <div className="container">
        <div className="qualification">
          <h3>Certifications</h3>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              View Certifications
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">JavaScript (ES6+)</a>
              <a className="dropdown-item" href="#">React.js</a>
              <a className="dropdown-item" href="#">HTML5 & CSS3</a>
              {/* Add more certifications as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
