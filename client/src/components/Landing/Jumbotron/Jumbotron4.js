import React from 'react';
import TitleTemp from '../../TitleTemp';

const Jumbotron4 = () => {
  return (
    <div>
      <TitleTemp
        bigTitle='리미티드 아트에디션'
        subTitle='Limited Art Editions'
      />
      {/* MOBILE VERSION */}
      <div className='col-11 intro-text d-block d-sm-none'>
        <div
          className='intro-text-bg mb-3'
          style={{
            color: '#d8a6a2',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          집에걸면 딱! <br />
          아티스트들이 직접 제작한 한정판 <br />
          아트에디션으로 집을 환하게 밝혀보세요!
        </div>
      </div>
      {/* DESKTOP VERSION */}
      <header className='masthead-4 mb-5'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-10 intro-text d-none d-sm-block'
              style={{ marginLeft: '42vw' }}
            >
              <div className='intro-text-bg' style={{ color: '#d8a6a2' }}>
                집에걸면 딱! <br />
                아티스트들이 직접 제작한 한정판 <br />
                아트에디션으로 집을 환하게 밝혀보세요!
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Jumbotron4;
