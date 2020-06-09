import React from 'react';
import MediumSection from './MediumSection';

const Mediums = () => {
  return (
    <section className='blog blog-2 section-b-space ratio3_2'>
      <div className='container '>
        <div className='row'>
          <div className='col'>
            <div className='title1'>
              <h4>Medium</h4>
              <h2 className='title-inner1'>사진을 예술작품으로 만드세요!</h2>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <MediumSection />
    </section>
  );
};

export default Mediums;
