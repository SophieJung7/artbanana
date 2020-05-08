import React, { Component } from 'react';
import Jumbotron from './Landing/Jumbotron/Jumbotron';
import Destinations from './Destinations/Destinations';
import Blogs from './Blogs/Blogs';
import ReviewCarousel from './Landing/ReviewCarousel/ReviewCarousel';
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
          <Destinations />
        </div>
        <div>
          <Blogs />
        </div>
        <div className="mb-5">
          <ReviewCarousel />
        </div>
      </div>
    );
  }
}

export default Landing;
