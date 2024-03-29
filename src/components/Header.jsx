import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
<header id='header' class="container-fluid bg-black text-white py-3">
  <div class="header-text row align-items-center">
    <div class="col-md-6 col-sm-12">
      <h1 class='name-header'><Link to="/" class="text-white">David De La Rosa</Link></h1>
    </div>
    <div class="col-md-6 col-sm-12 d-flex justify-content-end align-items-center">
      <nav class="navbar navbar-expand-md navbar-dark bg-black">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link text-white" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/qualifications">Qualifications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/contact">Contact</a>
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
