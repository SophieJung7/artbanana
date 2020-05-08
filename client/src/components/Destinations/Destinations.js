import React from 'react';
import DestinationSection from './DestinationSection';

const Destinations = () => {
  return (
    <section className="blog blog-2 section-b-space ratio3_2">
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="title1">
              <h4>Popular Destinations</h4>
              <h2 className="title-inner1">캣스냅 인기</h2>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <DestinationSection />
    </section>
  );
};

export default Destinations;
