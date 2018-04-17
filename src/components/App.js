import React, { Component } from 'react';
import Navbar from './Navbar';
import './../css/basic.css'; 
//take a look at the file; it pulls the other parts in
import Header from './Header';
import Home from './Home';
import About from './About';
import Photos from './Photos';
import Live from './Live';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Home />
        <About />
        <Photos />
        <Live />
        <Contact />

      </div>
    );
  }
}

export default App;
