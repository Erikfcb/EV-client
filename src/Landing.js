import React, { Component } from "react";
import "./Landing.css";
import Background from './Background';
import Navbar from './Navbar';
import Info from './Info';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Background />
        <Navbar />
        <Info />
      </div>
    );
  }
}

export default Landing;
