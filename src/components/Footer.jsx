import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer id='footer'>
      <section className="container text-center mb-4 text-white bg-black"> {/* Center the heading and make text white */}
        <h1 id='footer-title'>Let's get down to business.</h1>
        <div className="d-flex justify-content-center">
        <div className='home-about-link'>
          <Link to="/contact" className="btn btn-lg custom-button about-me-text">Message me</Link>
        </div>
      </div>

      </section>
      <div className="row justify-content-start"> {/* Align list to the left */}
        <div className="col-md-6"> {/* Adjust column size as needed */}
          <ul className="list-unstyled text-white bg-black"> {/* Make list text white */}
            <li><Link to="/about" className="text-white">About</Link></li>
            <li><Link to="/projects" className="text-white">Projects</Link></li>
            <li><Link to="/qualifications" className="text-white">Qualifications</Link></li>
            <li><Link to="/contact" className="text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
