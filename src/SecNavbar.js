import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
            <i className="fas fa-skull-crossbones" />
            EV
          </Link>
        </div>
        <div className="links">
          <li className="dropdown">
            <div className="link" onClick={this.handleClick}>
              Design <i className="fas fa-caret-down" />
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
        </div>
      </div>
    );
  }
}

export default Navbar;
