import React from 'react';

const Jumbotron = () => {
  return (
    <header className="masthead d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4 d-none d-sm-block"></div>
          <div className="col-8 intro-text d-none d-sm-block">
            <div className="intro-text-bg">취업준비가 힘드신가요?</div>
            <div className="intro-text-sm mt-3">
              대기업, 외국계기업, 공기업 출신의 취업전문가들과 함께 이력서,
              자소서, 면접을 준비하세요! 취업에 성공하려면 성공한 실무자들을
              만나는게 가장 빠른 방법입니다.
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
            <div className="intro-text-bg">취업준비가 힘드신가요?</div>
            <div className="intro-text-sm mt-3">
              대기업, 외국계기업, 공기업 출신의 취업전문가들과 함께 이력서,
              자소서, 면접을 준비하세요! <br />
              취업하지 못한다면 전액 환불해드립니다.
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
