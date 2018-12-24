import React, { Component } from "react";
import Landing from "../Landing";
import Contact from "../Contact";
import Skills from "../Skills";
import About from "../About";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Landing />
        <Skills />
        <About />
        <Contact />
      </div>
    );
  }
}

export default Home;
