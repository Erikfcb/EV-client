import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    }
    this.mouseIn = this.mouseIn.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseIn() {
    this.setState({
      animate: true
    });
  }

  mouseOut() {
    this.setState({
      animate: false
    });
  }

  render() {
    const {title, subtitle, icon} = this.props;
    const iconClass = this.state.animate ? "icon animated swing " + icon : "icon " + icon;

    return (
      <div className="card" onMouseOver={this.mouseIn} onMouseLeave={this.mouseOut}>
        <img className="card_bg_image" src='../assets/card_bg.png' alt='pic'/>
        <div className="card_title">{title}</div>
        <div className="card_subtitle">{subtitle}</div>
        <i className={iconClass} ></i>
      </div>
    );
  }
}

export default Card;