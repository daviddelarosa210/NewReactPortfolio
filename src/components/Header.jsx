// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id='header'>
      <nav>
        <h1 className='name-header'>  <Link to="/">David De La Rosa</Link></h1>
        <Link className='about-header' to="/about">About</Link>
        <Link className='projects-header' to="/projects">Projects</Link>
        <Link className='qualifications-header' to="/qualifications">Qualifications</Link>
        <Link className='contact-header' to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
