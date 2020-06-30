import React from 'react';

const Jumbotron3 = () => {
  return (
    <header className='masthead-3 d-flex align-items-center'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-10 intro-text d-none d-sm-block'>
            <div className='intro-text-bg' style={{ fontFamily: '궁서체' }}>
              아트바나나와 함께할 <br /> 최고의 아티스트들을 찾습니다!
            </div>
            <a
              href='/api/attempt/artist'
              className='btn btn-solid mt-5'
              style={{
                backgroundImage:
                  'linear-gradient(30deg, black 50%, transparent 50%)',
                border: 'none',
                fontSize: '1.1rem',
                color: 'white',
              }}
            >
              아티스트 지원하기
            </a>
          </div>
          <div className='col-11 intro-text d-block d-sm-none'>
            <div className='intro-text-bg' style={{ fontFamily: '궁서체' }}>
              아트바나나와 함께할 <br /> 최고의 아티스트들을 찾습니다!
            </div>
            <a
              href='/api/attempt/artist'
              className='btn btn-solid mt-5'
              style={{
                backgroundImage:
                  'linear-gradient(30deg, #b5dccd 50%, transparent 50%)',
                border: 'none',
                fontSize: '1.1rem',
              }}
            >
              아티스트 지원하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron3;
