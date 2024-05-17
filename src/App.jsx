// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer'; // Import the Footer component



function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/qualifications">
            <Qualifications />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
