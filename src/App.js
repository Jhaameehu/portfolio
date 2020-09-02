import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contacts/Contacts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}
export default App;
