import React from 'react';
import Pain from '../../../assets/photos/pain.jpg';

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
                  취업의 신이 여러분의 성공률을 500% 이상 높입니다!
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
              src={Pain}
              className="d-none d-sm-block col-lg-6 order-lg-2 text-white showcase-img"
              alt="interview"
            />
            <img
              src={Pain}
              className="d-block d-sm-none col-lg-6 order-lg-2 text-white showcase-img"
              alt="interview"
            />
            <div className="col-lg-6 order-lg-1 showcase-text">
              <h2>영어를 하려고 하면 심멎이 된다.</h2>
              <p
                className="lead mt-4 mb-0"
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                "Why should we hire you?" <br />
                이 말을 듣는 순간 내 심장은 콩닥콩닥 뛰기 시작합니다. <br />
                "Because.." <br />
                갑자기 나를 뚫어져라 쳐다보는 면접관이 고개를 갸우뚱합니다. 못
                알아들은 걸까요? 내 발음이 이상한 걸까요? 내용이 별로인걸 까요?
                이렇게 생각하고 있는 동안 이 회사와 나는 점점 멀어져만 갑니다.
                이렇게 해서는 영어면접에 합격할 수 없습니다.
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
                가장 부담스럽게 느껴지는 면접유형은?
              </h3>
              <h5 style={{ textAlign: 'right', fontSize: '1rem' }}>
                취업준비생 3189명 조사 [자료제공: YBM 한국토익위원회]
              </h5>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  style={{ width: '40%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  합숙면접 14.2%
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
                  토론면접 15.5%
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
                  영어면접 47.7%
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 showcase-text">
              <h2>영어면접은 여러분의 무기가 될 수 있습니다!</h2>
              <p
                className="lead mt-4 mb-0"
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                대부분의 취준생들이 영어면접을 어려워합니다. 실력은 다
                고만고만합니다. 따라서 여기서 점수를 따는 것은 합격으로 가는
                지름길입니다. 인터뷰온으로 편안하고 쉽게 영어면접을 준비하세요!
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
