import React from 'react';

const JobEx = () => {
  return (
    <div>
      <section style={{ paddingTop: '0' }} className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 showcase-text">
              <h2>본인이 지원한 직무에 대해서 얼마나 알고 계신가요?</h2>
              <p
                className="lead mt-4 mb-0"
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                본인이 지원한 직무에 대해 정확히 파악하는 것은 취업성공의 가장
                중요한 열쇠입니다. 인터뷰온은 대기업, 공기업, 외국계기업 경력이
                5년 이상인 베테랑 취업전문가들로 구성됩니다. 인터뷰온
                취업전문가들이 여러분의 직무, 실무에 대해 정확히
                짚어드리겠습니다.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="#prolist"
                  className="btn btn-solid mt-5"
                  style={{
                    fontSize: '1.2rem',
                    border: 'none',
                    backgroundImage:
                      'linear-gradient(50deg, #ff73ca 50%, transparent 50%)',
                  }}
                >
                  취업전문가 살펴보기
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-lg-1 text-white showcase-img px-3 px-sm-5"
              style={{ paddingTop: '8%', backgroundColor: '#f8f9fa' }}
            >
              <h3 style={{ textAlign: 'center', color: 'black' }}>
                면접에서 가장 중요하게 평가하는 요소
              </h3>
              <h5 style={{ textAlign: 'right', fontSize: '1rem' }}>
                기업 263개사 설문조사 [자료제공: 사람인]
              </h5>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  style={{ width: '40%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  입사의지 14.1%
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  style={{ width: '45%' }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  성실성 25.5%
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: '75%',
                    backgroundColor: '#1cdffe',
                    color: 'black',
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  직무수행능력 41.1%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobEx;
