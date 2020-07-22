import React, { Component } from 'react';
import Jumbotron from './Landing/Jumbotron/Jumbotron';
import Jumbotron2 from './Landing/Jumbotron/Jumbotron2';
import ArtistList from './Artists/Show/ArtistsList';
import Jumbotron3 from './Landing/Jumbotron/Jumbotron3';
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
          <Jumbotron2 />
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
