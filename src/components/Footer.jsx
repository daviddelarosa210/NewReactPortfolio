import React from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import Link and useHistory from react-router-dom

const Footer = () => {
  const history = useHistory();

  const scrollToTop = () => {
    history.push('/contact');  // Navigate to the contact page
    window.scrollTo(0, 0);     // Scroll to the top of the page
  };

  return (
    <footer id='footer'>
      <section className="container text-center mb-4 text-white bg-black">
        <h1 id='footer-title'>Let's get down to business.</h1>
        <div className="d-flex justify-content-center">
          <div className='home-about-link'>
            <button onClick={scrollToTop} className="btn btn-lg custom-button about-me-text">
              Message me
            </button>
          </div>
        </div>
      </section>
      <div className="row no-gutters">
        <div className="col-md-6">
          <ul className="list-unstyled text-white bg-black">
            <li><Link to="/about" className="text-white" onClick={scrollToTop}>About</Link></li>
            <li><Link to="/projects" className="text-white" onClick={scrollToTop}>Projects</Link></li>
            <li><Link to="/qualifications" className="text-white" onClick={scrollToTop}>Qualifications</Link></li>
            <li><Link to="/contact" className="text-white" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>
      </div>
       {/* Add your footer content here */}
       <p className='footer-copy'>&copy; 2024 David's Resume</p>
      {/* Text links to GitHub and LinkedIn */}
      <div className='footer-copy'>
        <a href="https://github.com/daviddelarosa210" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="https://www.linkedin.com/in/david-de-la-rosa-b0150b177/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
