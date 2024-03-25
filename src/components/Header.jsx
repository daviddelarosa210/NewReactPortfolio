// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>  <Link to="/">David De La Rosa</Link></h1>
      <nav>
      <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/qualifications">Qualifications</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
