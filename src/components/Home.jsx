import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div id="home">
  <section id="home-header" class="container">
    <div class="row">
      <div class="col-md-8 col-sm-10 col-xs-12">
        <div class="">
          <h1 className='home-header-text'>A Full Stack Developer skilled in front-end and back-end development.</h1>
        </div>
      </div>
    </div>
  </section>
   
  <section id="home-picture" className="d-flex justify-content-center align-items-center">
  <div>      
    <img src="/pfp.png" alt="Photo of David De La Rosa" />
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

    <div className="col-md-6 col-sm-12 d-flex">
          <div className='home-about-link'>
          <button type="button" class="btn btn-lg custom-button">
            <Link to="/about" className="about-me-text">About Me</Link>
          </button>
          </div>
        </div>

      <section id='home-projects'>
        <div className='home-projects-quote'>
          <h2>I've spearheaded numerous full-stack developer projects- </h2>
          <h2>that could reach and benefited thousands of users.</h2>
          <Link to="/projects">Projects</Link>
        </div>
      </section>

      <section>
        <div>
          <h2>Featured Projects</h2>
          <p>About the project</p>
          <Link to="/projects">View Case Study</Link>
        </div>
      </section>



    </div>
  );
};

export default Home;
