import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div>
      <section id="home-header">
        <div className="home-header-text">
          <h1>A Full Stack Developer skilled in front-end and back-end development.</h1>
        </div>
      </section>
   
      <section id="home-picture">
        <div>      
          <img src="" alt="" />
        </div>
      </section>

      <section id="home-quote">
        <div className='home-quote-text'>
          <h3>So, you're pouring your heart into a project,</h3>
          <h3>but how do you ensure users fall in love with it too?</h3>
          <h3>That's where I come in as a full-stack developer.</h3>
        </div>
        <div className='home-about-link'>
            <Link to="/about">About</Link>
        </div>
      </section>

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
