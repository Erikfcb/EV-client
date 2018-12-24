import React, { Component } from "react";
import "./Info.css";
import { scroller } from "react-scroll";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <div className="slogen">REACH AND GROW YOUR AUDIENCE</div>
        <div
          className="learn"
          onClick={function() {
            scroller.scrollTo("skills", {
              duration: 1000,
              delay: 100,
              smooth: true
            });
          }}
        >
          <div className="learn_title">Learn more</div>
          <div className="underline" />
        </div>
      </div>
    );
  }
}

export default Info;
