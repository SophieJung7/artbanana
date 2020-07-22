import React from 'react';

const Jumbotron2 = () => {
  return (
    <header className='masthead-2 d-flex align-items-center'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-10 intro-text d-none d-sm-block'>
            <div className='intro-text-bg' style={{ fontFamily: '궁서체' }}>
              단순한 드로잉이 아닌 <br />
              살아있는 예술작품을 만듭니다. <br />
              사진에 담겨있는 소중한 추억을 <br />
              시간을 초월하는 예술작품으로 만들어보세요!
            </div>
          </div>
          <div className='col-11 intro-text d-block d-sm-none'>
            <div className='intro-text-bg' style={{ fontFamily: '궁서체' }}>
              단순한 드로잉이 아닌 <br />
              살아있는 예술작품을 만듭니다. <br />
              사진에 담겨있는 소중한 추억을 <br />
              시간을 초월하는 예술작품으로 만들어보세요!
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron2;
