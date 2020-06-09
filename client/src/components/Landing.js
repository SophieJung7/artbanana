import React, { Component } from 'react';
import Jumbotron from './Landing/Jumbotron/Jumbotron';
import Jumbotron3 from './Landing/Jumbotron/Jumbotron3';
import Mediums from './Mediums/Mediums';
import Prints from './Prints/Prints';
class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <Jumbotron style={{ position: 'absolute' }} />
        </div>
        <div>
          <Mediums />
        </div>
        <div>
          <Jumbotron3 />
        </div>
        <div>
          <Prints />
        </div>
      </div>
    );
  }
}

export default Landing;
