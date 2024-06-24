import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const history = useHistory();

  const scrollToTop = (path) => {
    history.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <div id="home">
      <section id="home-header" className="container">
        <div className="row">
          <div className="col-md-8 col-sm-10 col-xs-12">
            <div>
              <h1 className='home-header-text'>A Full Stack Developer skilled in front-end and back-end development.</h1>
            </div>
          </div>
        </div>
      </section>
      
      <section id="home-picture" className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <img src="/pfp.png" alt="Photo of David De La Rosa" className="img-fluid"/>
          </div>
        </div>
      </section>

      <section id="home-quote" className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className='home-quote-text'>
              <h3>Struggling to create a website that stands out and converts visitors?</h3>
              <h3>As a web developer, I design and develop custom websites that enhance your online presence and enhance your business.</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="row justify-content-start no-gutters">
        <div className="col-md-6 col-sm-12 d-flex justify-content-start" style={{ marginLeft: '60px' }}>
          <div className='home-about-link'>
            <button onClick={() => scrollToTop('/about')} className="btn btn-lg custom-button about-me-text">
              About Me
            </button>
          </div>
        </div>
      </div>

      <section id='home-projects' className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-12 col-md-10 col-sm-12 col-xs-12 text-center">
            <div className='home-projects-quote'>
              <h2 className='fsd'>I've spearheaded numerous full-stack developer projects.</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="projects-link col-md-6 col-sm-12 d-flex justify-content-center">
        <div className='project-about-link'>
          <button onClick={() => scrollToTop('/projects')} className="btn btn-lg custom-button about-me-text">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
