import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Navbar from './Common/Navbar/Navbar';
// import Footer from './Common/Footer/Footer';
import ErrorBoundary from './Common/ErrorBoundary';
//import { Color } from 'three';
import Portfolio from './Portfolio/Portfolio';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 120px)' }}>
          <Routes>
            <Route path="/" element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            } />
            <Route path="/about" element={
              <ErrorBoundary>
                <About />
              </ErrorBoundary>
            } />
            <Route path="/skills" element={
              <ErrorBoundary>
                <Skills />
              </ErrorBoundary>
            } />
            <Route path="/projects" element={
              <ErrorBoundary>
                <Projects />
              </ErrorBoundary>
            } />
            <Route path="/contact" element={
              <ErrorBoundary>
                <Contact />
              </ErrorBoundary> 
            } />
            <Route path="*" element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            } />
            <Route path="/portfolio" element={<ErrorBoundary><Portfolio /></ErrorBoundary>} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;