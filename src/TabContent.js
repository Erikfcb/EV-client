import React, { Component } from "react";
import "./TabContent.css";

class TabContent extends Component {
  render() {
    return (
      <div className="tabContent">
      <div className="text_wrap">
        <div className="tab_title">{this.props.title}</div>
        <div className="tab_text">{this.props.text}</div>
      </div>
      <img className="tab_img" src={this.props.img} alt="tab"/>
      </div>
      
    );
  }
}

export default TabContent;
