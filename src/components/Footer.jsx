// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Add links to your social media profiles */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
