import React, { Component } from 'react';
import ArtistList from './Artists/Show/ArtistsList';
import EditionArtistList from './Artists/Show/EditionArtistsList';
import Jumbotron from './Landing/Jumbotron/Jumbotron';
import Jumbotron2 from './Landing/Jumbotron/Jumbotron2';
import Jumbotron3 from './Landing/Jumbotron/Jumbotron3';
import Jumbotron4 from './Landing/Jumbotron/Jumbotron4';
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
          <Jumbotron4 />
        </div>
        <div>
          <EditionArtistList />
        </div>
        <div>
          <Jumbotron3 />
        </div>
      </div>
    );
  }
}

export default Landing;
