import React, { Component } from 'react';
import './Background.css';

class Background extends Component {
  render() {
    return (
      <div className="background">
        <img className='bg_image' src='../assets/background.jpg' alt='pic'/>
      </div>
    );
  }
}

export default Background;