import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer>
      <div className="container">
      <section>
        <div>
          <h1>Let's get down to business.</h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/qualifications">Qualifications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </section>
      </div>
    </footer>
  );
};

export default Footer;



