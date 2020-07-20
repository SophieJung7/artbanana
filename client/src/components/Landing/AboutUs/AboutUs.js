import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <section
        className='blog blog-2 section-b-space ratio3_2'
        style={{ paddingTop: '1vh', paddingBottom: '0' }}
      >
        <div className='container'>
          <div className='row mt-5'>
            <div className='col'>
              <div className='title1'>
                <h4>We Create</h4>
                <h2 className='title-inner1'>시간을 초월하는 예술작품</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: '0' }}>
        <div className='container-fluid p-0'>
          <div className='row no-gutters text-center  d-flex justify-content-center'>
            <div className='col-lg-5'>
              <h2
                className='lead mt-4 mb-0'
                style={{ fontSize: '1rem', lineHeight: '1.5' }}
              >
                우리는 선 하나하나에 정성을 쏟아 단순한 드로잉이 아닌 살아있는
                예술작품을 만듭니다. 사진에 담겨있는 소중한 추억을 시간을
                초월하는 예술작품으로 만들어보세요!
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
