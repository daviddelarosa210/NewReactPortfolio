// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1><a href="#home">David De La Rosa</a></h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#qualifications">Qualifications</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
