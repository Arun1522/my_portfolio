import React, { useState } from 'react';
import './index.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
const App = () => {
  const [loading, setloading] = useState(true);
  const container = document.getElementById('container');

  if (container) {
    setTimeout(() => {
      container.style.display = 'none';
      setloading(false);
    }, 2000);
  }
  return (
    !loading && (
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    )
  );
};

export default App;
