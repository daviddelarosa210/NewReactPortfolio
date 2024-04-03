import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header id='header' className="container-fluid bg-black text-white py-3">
      <div className="header-text row align-items-center">
        <div className="col-md-6 col-sm-12">
          <h1 className='name-header'><Link to="/" className="text-white">David De La Rosa</Link></h1>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center justify-content-md-end">
          <nav className="navbar navbar-expand-md navbar-dark bg-black">
            <button 
              className="navbar-toggler align-self-center" 
              type="button" 
              onClick={handleNavCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link text-white" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/qualifications">Qualifications</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
