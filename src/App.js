import React, { Component } from 'react';
import logo from './images/logo.gif';
import './css/basic.css'; //take a look at the file; it pulls the other parts in

class App extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <img src={logo} alt="Jay Skript and the Domsters" />
        </div>
        <div id="navigation">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="photos.html">Photos</a></li>
            <li><a href="live.html">Live</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div id="content">
          <h1>Welcome</h1>
          <p id="intro">Welcome to the official website of Jay Skript and the Domsters. Here, you can <a href="about.html">learn more about the band</a>, view <a href="photos.html">photos of the band</a>, find out about <a href="live.html">tour dates</a> and <a href="contact.html">get in touch with the band</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;
