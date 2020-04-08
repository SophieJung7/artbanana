import React, { Component } from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import AboutUs from './AboutUs/AboutUs';
import OurService from './OurService/OurService';
import WhyUs from './WhyUs/WhyUs';
import ProList from './ProList/ProList';
import Review from './Review/Review';
import Subscribe from './Subscribe/Subscribe';

class Landing extends Component {
  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <Jumbotron style={{ position: 'absolute' }} />
        </div>
        <div>
          <AboutUs />
        </div>
        <div id='our-service'>
          <OurService />
        </div>
        <div>
          <WhyUs />
        </div>
        <div id='prolist'>
          <ProList />
        </div>
        <div className='mb-5'>
          <Review />
        </div>
        <div>
          <Subscribe className='mb-5' />
        </div>
      </div>
    );
  }
}

export default Landing;
