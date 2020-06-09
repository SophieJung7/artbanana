import React from 'react';

const Jumbotron2 = () => {
  return (
    <header className='masthead-2 d-flex align-items-center'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-10 intro-text d-none d-sm-block'>
            <div className='intro-text-bg' style={{ fontFamily: '궁서체' }}>
              시, 아름다움, 로맨스, 사랑... <br />
              이 것이 우리가 삶을 사는 이유이다. <br />- 영화 죽은 시인의 사회
              중에서 -
            </div>
          </div>
          <div className='col-11 intro-text d-block d-sm-none'>
            <div className='intro-text-bg' style={{ fontFamily: '궁서체' }}>
              시, 아름다움, 로맨스, 사랑... <br />
              이 것이 우리가 삶을 사는 이유이다. <br />- 영화 죽은 시인의 사회
              중에서 -
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron2;
