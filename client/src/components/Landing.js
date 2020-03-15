import React, { Component } from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Destinations from './Destinations/Destinations';

class Landing extends Component {
  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <Jumbotron style={{ position: 'absolute' }} />
        </div>
        <div>
          <Destinations />
        </div>
      </div>
    );
  }
}

export default Landing;
