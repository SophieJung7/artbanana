import React, { Component } from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import Destinations from './Destinations/Destinations';
import Blogs from './Blogs/Blogs';

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
        <div>
          <Blogs />
        </div>
      </div>
    );
  }
}

export default Landing;
