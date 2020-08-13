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
      <div className='intro-text d-block d-sm-none'>
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
      <header className='masthead-4 mb-5 d-flex align-items-center justify-content-center'>
        <div className='d-none d-sm-block' style={{ textAlign: 'center' }}>
          <h1
            className='mb-3'
            style={{ color: '#094b09', textShadow: '4px 4px #f0d5c0' }}
          >
            집에걸면 딱!
          </h1>
          <div
            className='mb-3'
            style={{
              fontWeight: '600',
              fontSize: '1.1rem',
              textAlign: 'center',
              color: 'grey',
            }}
          >
            아티스트들이 직접 제작한 한정판 아트에디션으로 집을 환하게
            밝혀보세요!
          </div>
        </div>
      </header>
    </div>
  );
};

export default Jumbotron4;
