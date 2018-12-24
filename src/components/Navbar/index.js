import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { scroller } from "react-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      design: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ design: !this.state.design });
  }

  render() {
    let design = this.state.design
      ? "dropdown-menu visible"
      : "dropdown-menu hidden";
    return (
      <div className="navbarz">
        <div className="logo_wrap animated rubberBand delay-1.5s">
          <Link className="logo" to="/">
            <i className="fas fa-skull-crossbones " />
            EV
          </Link>
        </div>
        <div className="links">
          <li className="dropdown">
            <div className="link" onClick={this.handleClick}>
              Design <i className="fas fa-caret-down dropdown-sign" />
            </div>
            <div className={design}>
              <Link className="dropdown-item" to="/grid">
                Grid example
              </Link>
              <Link className="dropdown-item" to="/news">
                Newsletter example
              </Link>
              <Link className="dropdown-item" to="/tabs">
                Tabs example
              </Link>
              <Link className="dropdown-item" to="/log">
                Login/Sign-up example
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/">
                Homepage
              </Link>
            </div>
          </li>
          <div
            className="link"
            onClick={function() {
              scroller.scrollTo("about", {
                duration: 1500,
                delay: 100,
                smooth: true
              });
            }}
          >
            About
          </div>
          <div
            className="link"
            onClick={function() {
              scroller.scrollTo("contact", {
                duration: 2000,
                delay: 100,
                smooth: true
              });
            }}
          >
            Contact
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
