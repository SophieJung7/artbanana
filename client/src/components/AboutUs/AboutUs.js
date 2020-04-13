import React from 'react';
import Interview from '../../assets/photos/interview.jpg';

const AboutUs = () => {
  return (
    <div>
      <section
        className="blog blog-2 section-b-space ratio3_2"
        style={{ paddingTop: '1vh', paddingBottom: '0' }}
      >
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div className="title1">
                <h4>Our story</h4>
                <h2 className="title-inner1">
                  인터뷰온은 이렇게 탄생했습니다.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: '0' }} className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <img
              src={Interview}
              className="d-none d-sm-block col-lg-6 order-lg-2 text-white showcase-img"
              alt="interview"
            />
            <img
              src={Interview}
              className="d-block d-sm-none col-lg-6 order-lg-2 text-white showcase-img"
              alt="interview"
            />
            <div className="col-lg-6 order-lg-1 showcase-text">
              <h2>영어를 하려고 하면 심멎이 된다.</h2>
              <p
                className="lead mt-4 mb-0"
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                "Why do we have to hire you?" <br />
                이 말을 듣는 순간 내 심장은 콩닥콩닥 뛰기 시작합니다. <br />
                면접관들이 뭐라고 하는지는 전혀 들리지 않고 내 심장소리만
                들립니다. 어느새 20분이라는 시간이 훌쩍 지났고, 난 무슨 일이
                일어났는지도 모른채 장소를 떠납니다. <br />
                이게 슬프지만, 대부분의 현실입니다.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="#our-service"
                  className="btn btn-solid mt-5"
                  style={{
                    fontSize: '1.2rem',
                    border: 'none',
                    backgroundImage:
                      'linear-gradient(50deg, #ff73ca 50%, transparent 50%)',
                  }}
                >
                  영어면접 속성과외란?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: '0' }} className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img px-5"
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
            <div className="col-lg-6 order-lg-1 showcase-text">
              <h2>본인이 지원한 직무에 대해서 얼마나 알고 계신가요?</h2>
              <p
                className="lead mt-4 mb-0"
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                대부분의 취준생들은 실무 경험이 없기 때문에 실무가 무엇인지를
                전혀 모릅니다. 그리고 이걸 가르쳐 줄 사람도 마땅히 없습니다.
                인터넷으로 대략 파악하는 방법 밖에는 없는데, '대략'으로는 본인의
                경쟁력을 만들 수 없습니다.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="#prolist"
                  className="btn btn-solid mt-5"
                  style={{
                    fontSize: '1.2rem',
                    border: 'none',
                    backgroundImage:
                      'linear-gradient(50deg, #4df6c0 50%, transparent 50%)',
                  }}
                >
                  영어면접 전문가 살펴보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
