import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
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
              <h3>So, you're pouring your heart into a project,</h3>
              <h3>but how do you ensure users fall in love with it too?</h3>
              <h3 className='twici'>That's where I come in as a full-stack developer!</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="row justify-content-start no-gutters">
  <div className="col-md-6 col-sm-12 d-flex justify-content-start" style={{ marginLeft: '60px' }}> {/* Make it occupy the entire width and push its content to the left */}
    <div className='home-about-link'> {/* Apply margin to the right */}
      <Link to="/about" className="btn btn-lg custom-button about-me-text">About Me</Link>
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
          <Link to="/projects" className="btn btn-lg custom-button about-me-text">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
