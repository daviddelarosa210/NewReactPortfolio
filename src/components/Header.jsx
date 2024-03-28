import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header id='header' className="container-fluid bg-black text-light py-3">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12">
          <h1 className='name-header'><Link to="/">David De La Rosa</Link></h1>
        </div>
        <nav className="col-md-6 col-sm-12 text-md-right text-sm-center mt-md-0 mt-sm-3">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-md-3"><Link className='about-header text-light' to="/about">About</Link></li>
            <li className="list-inline-item mr-md-3"><Link className='projects-header text-light' to="/projects">Projects</Link></li>
            <li className="list-inline-item mr-md-3"><Link className='qualifications-header text-light' to="/qualifications">Qualifications</Link></li>
            <li className="list-inline-item"><Link className='contact-header text-light' to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
