import React from 'react';

const Projects = () => {

  return (
    <div id='projects-page'>
      <section id="fphc" className="container-fluid d-flex justify-content-center align-items-center">
        <h2 id='featured-project' className='text-center'>Featured Projects</h2>
      </section>
      <section id='project-cards'>
        <div className="container">
          <div className="row">
            <div className="col-md-6" id='ET-card'>
              <div className="card">
                <a href="https://github.com/daviddelarosa210/Employee-Tracker">
                  <img src="/Employee.png" alt="first-project-img" className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Employee Tracker</h5>
                  <p className="card-text">This project was to make a simple employee database.</p>
                  <a href="https://github.com/daviddelarosa210/Employee-Tracker" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6" id='ET-card'>
              <div className="card">
                <a href="https://github.com/daviddelarosa210/E-commerce-Back-End">
                  <img src="/E-commerce.png" alt="second-project-img" className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">E-commerce Back End</h5>
                  <p className="card-text">This project was to connect the back end of an E-commerce website.</p>
                  <a href="https://github.com/daviddelarosa210/E-commerce-Back-End" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6" id='ET-card'>
              <div className="card">
                <a href="">
                  <img src="/Weather.png" alt="third-project-img" className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Weather Jamz</h5>
                  <p className="card-text">Receive music recommendations based on the weather using a weather API and the Spotify music API.</p>
                  <a href="" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6" id='ET-card'>
              <div className="card">
                <a href="https://github.com/daviddelarosa210/Social-Network-API">
                  <img src="/Social.png" alt="fourth-project-img" className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Social Network</h5>
                  <p className="card-text">This is a RESTful API for a social network. It allows users to perform various operations, including creating and managing users, thoughts, and reactions.</p>
                  <a href="https://github.com/daviddelarosa210/Social-Network-API" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6" id='ET-card'>
              <div className="card">
                <a href="https://github.com/daviddelarosa210/Read-Me-Generator">
                  <img src="Read.png" alt="html-website-img" className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Read Me Generator</h5>
                  <p className="card-text">This project generates a read me and inserts it directly into your project file.</p>
                  <a href="https://github.com/daviddelarosa210/Read-Me-Generator" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-6" id='ET-card'>
              <div className="card">
                <a href="https://daviddelarosa210.github.io/Password-Generator/">
                  <img src="Password.png" alt="password-gen-img" className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Password Generator</h5>
                  <p className="card-text">Password Generator: effortlessly create strong, tailored passwords.</p>
                  <a href="https://daviddelarosa210.github.io/Password-Generator/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
