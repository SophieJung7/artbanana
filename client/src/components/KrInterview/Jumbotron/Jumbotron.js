import React from 'react';

const Jumbotron = () => {
  return (
    <header className="masthead d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {/* <div className="col-4 d-none d-sm-block"></div> */}
          <div className="col-8 intro-text d-none d-sm-block">
            {/* <div className="intro-text-bg" style={{ fontWeight: '800' }}>
              연봉 3,400만원 이상 회사에 취업하려면?
            </div>
            <div className="intro-text-sm mt-3">
              취업의 신들에게 취업 컨설팅 받으세요! <br /> 대기업, 외국계기업,
              공기업 출신의 취업전문가들이 검증된 전략을 통해{' '}
              <div style={{ fontWeight: '800' }}>
                여러분의 취업성공률을 500% 이상 높입니다!
              </div>
            </div> */}
            {/* <a
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
            </a> */}
          </div>
          <div className="col-11 intro-text d-block d-sm-none">
            {/* <div className="intro-text-bg">
              연봉 3,400만원 이상 회사에 취업하려면?
            </div>
            <div className="intro-text-sm mt-3">
              취업의 신들에게 취업 컨설팅 받으세요! <br /> 대기업, 외국계기업,
              공기업 출신의 취업전문가들이 검븡된 전략을 통해{' '}
              <div style={{ fontWeight: '800', display: 'inline' }}>
                여러분의 취업성공률을 500% 이상 높입니다.
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron;
