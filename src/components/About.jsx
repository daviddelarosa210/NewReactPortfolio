import React from 'react';

const About = () => {
  return (
    <div className='page'>
      <section id="about-me-bio" className="container-fluid d-flex justify-content-center align-items-center">
        <h2 className='about-me-heading text-center'>As a full-stack developer, I manage all aspects of web application development, from UI design to backend logic and databases.</h2>
      </section>
      <section className="container">
        <div className="row" id='bio-section'>
          <div className="col-md-6 bg-white" id='bio'>
            <h2 id='about-me-h2'>But that’s not all…</h2>
            <p id='about-me-p' className=''>Welcome! I'm David De La Rosa, a Full-Stack Developer certified by UTSA in 2024. With a passion for coding since 2017, I've specialized in creating seamless web experiences. My journey began by supporting my family's business, where I've optimized our online presence. I thrive on challenges and love exploring new technologies. Let's connect and bring your digital ideas to life!</p>
          </div>
          <div className="col-md-6">
            <img src="/wedding.png" alt="wedding-img" className="img-fluid" id='wedding-img' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
