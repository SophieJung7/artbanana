import React from 'react';
import Sad from '../../../assets/photos/sad.jpg';

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
              src={Sad}
              className="d-none d-sm-block col-lg-6 order-lg-2 text-white showcase-img"
              alt="interview"
            />
            <img
              src={Sad}
              className="d-block d-sm-none col-lg-6 order-lg-2 text-white showcase-img"
              alt="interview"
            />
            <div className="col-lg-6 order-lg-1 showcase-text">
              <h2>취업, 혼자 준비하기엔 너무 벅차다.</h2>
              <p
                className="lead mt-4 mb-0"
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                인터뷰온이 만났던 수많은 취준생들은 저희를 만나고 울었고 저희
                또한 울었습니다. 알바도 해야하고, 학교도 다녀야 하는데 이력서,
                자소서에 면접까지 준비해야되기 때문이죠. 저희는 이런 상황이
                바뀌어야 한다고 믿었습니다.
              </p>
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
                구직활동에 있어 가장 어렵다고 생각되는 것은 무엇입니까?
              </h3>
              <h5 style={{ textAlign: 'right', fontSize: '1rem' }}>
                취업준비생 171명 조사 [자료제공: 고용노동부]
              </h5>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  style={{ width: '25%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  지역적 불균형 7.6%
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  style={{ width: '55%' }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  취업정보 부족 31%
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: '85%',
                    backgroundColor: '#1cdffe',
                    color: 'black',
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  자소서, 이력서 등 실질적 취업준비과정 52%
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 showcase-text">
              <h2>실질적인 취업준비과정을 인터뷰온이 책임집니다!</h2>
              <p
                className="lead mt-4 mb-0"
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                인터뷰온은 200건이 넘는 취업성공케이스들을 바탕으로 가장 빠르게
                효율적으로 합격할 수 있는 방법을 연구했습니다. 인터뷰온과 함께
                검증된, 최적화된 취업준비를 하세요!
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="#products"
                  className="btn btn-solid mt-5"
                  style={{
                    fontSize: '1.2rem',
                    border: 'none',
                    backgroundImage:
                      'linear-gradient(50deg, #4df6c0 50%, transparent 50%)',
                  }}
                >
                  인터뷰온 서비스 살펴보기
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
