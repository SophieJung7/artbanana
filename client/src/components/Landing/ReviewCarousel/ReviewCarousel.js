import React from 'react';
import CarouselSection from './CarouselSection';

const Carousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="title1">
            <h4>Review</h4>
            <h2 className="title-inner1">캣스냅 후기</h2>
            <hr />
          </div>
        </div>
      </div>
      <CarouselSection />
    </div>
  );
};

export default Carousel;
