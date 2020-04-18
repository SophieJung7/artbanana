import React from 'react';

const Jumbotron = () => {
  return (
    <header className="masthead d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4 d-none d-sm-block"></div>
          <div className="col-8 intro-text d-none d-sm-block">
            <div className="intro-text-bg">나도 취업하고싶다!!!!!!</div>
            <div className="intro-text-sm mt-3">
              인터뷰온은 대기업, 외국계기업, 공기업 출신의 선배들로 구성된
              취업전문가 플랫폼입니다. 200건이 넘는 취업성공케이스들을 바탕으로
              연구한 검증된, 최적화된 취업준비로 취업에 성공하세요!
            </div>
            <a
              href="#products"
              className="btn btn-solid mt-5"
              style={{
                fontSize: '1.2rem',
                color: 'white',
                border: 'none',
                backgroundImage:
                  'linear-gradient(50deg, black 50%, transparent 50%)',
              }}
            >
              인터뷰온 서비스안내
            </a>
          </div>
          <div className="col-11 intro-text d-block d-sm-none">
            <div className="intro-text-bg">나도 취업하고 싶다!!!!!!</div>
            <div className="intro-text-sm mt-3">
              인터뷰온은 대기업, 외국계기업, 공기업 출신의 선배들로 구성된
              취업전문가 플랫폼입니다. 200건이 넘는 취업성공케이스들을 바탕으로
              연구한 검증된, 최적화된 취업준비로 취업에 성공하세요!
            </div>
            <a
              href="#products"
              className="btn btn-solid mt-5"
              style={{
                fontSize: '1.2rem',
                color: 'white',
                border: 'none',
                backgroundImage:
                  'linear-gradient(50deg, black 50%, transparent 50%)',
              }}
            >
              인터뷰온 서비스안내
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron;
