import React from 'react';
import PrintSection from './PrintSection';

const Prints = () => {
  return (
    <section className='blog blog-2 section-b-space ratio3_2'>
      <div className='container '>
        <div className='row'>
          <div className='col'>
            <div className='title1'>
              <h4>Prints</h4>
              <h2 className='title-inner1'>
                안그래도 예쁜 사진을 더 예쁘게 만드세요!
              </h2>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <PrintSection />
    </section>
  );
};

export default Prints;
