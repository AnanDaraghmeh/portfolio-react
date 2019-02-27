import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import UpArrow from './components/UpArrow';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
        <UpArrow />
      </div>
    );
  }
}

export default App;
