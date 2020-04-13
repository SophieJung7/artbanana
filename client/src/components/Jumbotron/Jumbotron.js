import React from 'react';

const Jumbotron = () => {
  return (
    <header className="masthead d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4 d-none d-sm-block"></div>
          <div className="col-8 intro-text d-none d-sm-block">
            <div className="intro-text-bg">
              국내 최초 영어면접 전문가들과의 <br />
              영어모의면접 플랫폼, 인터뷰온!
            </div>
            <div className="intro-text-sm mt-3">
              대기업, 외국계기업 출신 네이티브 수준의 영어전문가들과 모의면접을
              하세요! <br />
              영어면접에 대한 두려움을 확실히 없애드리겠습니다.
            </div>
            <a
              href="#prolist"
              className="btn btn-solid mt-5"
              style={{
                fontSize: '1.2rem',
                color: 'white',
                border: 'none',
                backgroundImage:
                  'linear-gradient(50deg, black 50%, transparent 50%)',
              }}
            >
              영어면접전문가 살펴보기
            </a>
          </div>
          <div className="col-11 intro-text d-block d-sm-none">
            <div className="intro-text-bg">
              국내 최초 영어면접 전문가들과의 <br />
              영어모의면접 플랫폼, 인터뷰온!
            </div>
            <div className="intro-text-sm mt-3">
              대기업, 외국계기업 출신 네이티브 수준의 영어전문가들과 모의면접을
              하세요! <br />
              영어면접에 대한 두려움을 확실히 없애드리겠습니다.
            </div>
            <a
              href="#prolist"
              className="btn btn-solid mt-5"
              style={{
                fontSize: '1.2rem',
                color: 'white',
                border: 'none',
                backgroundImage:
                  'linear-gradient(50deg, black 50%, transparent 50%)',
              }}
            >
              영어면접전문가 살펴보기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron;
