import React, { Component } from 'react';
import ProductsList from './Products/ProductsList';
import Jumbotron from './Landing/Jumbotron/Jumbotron';
import Jumbotron2 from './Landing/Jumbotron/Jumbotron2';
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
        {/* Pencil Drawing Artists */}
        <div>
          <ProductsList category='pencil' />
        </div>
        {/* <div>
          <ProductsList category='illustration' />
        </div>
        <div>
          <ProductsList category='photoshop' />
        </div> */}
        <div>
          <Jumbotron3 />
        </div>
      </div>
    );
  }
}

export default Landing;
