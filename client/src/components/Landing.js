import React, { Component } from 'react';
import Jumbotron from './Landing/Jumbotron/Jumbotron';
import ArtistList from './Artists/Show/ArtistsList';
import Jumbotron3 from './Landing/Jumbotron/Jumbotron3';
import AboutUs from './Landing/AboutUs/AboutUs';
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
          <AboutUs />
        </div>
        <div>
          <ArtistList />
        </div>
        <div>
          <Jumbotron3 />
        </div>
      </div>
    );
  }
}

export default Landing;
