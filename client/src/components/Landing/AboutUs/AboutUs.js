import React from 'react';
import Pain from '../../../assets/photos/pain.jpg';

const AboutUs = () => {
  return (
    <div>
      <section
        className='blog blog-2 section-b-space ratio3_2'
        style={{ paddingTop: '1vh', paddingBottom: '0' }}
      >
        <div className='container'>
          <div className='row mt-5'>
            <div className='col'>
              <div className='title1'>
                <h4>Our story</h4>
                <h2 className='title-inner1'>
                  취업의 신이 여러분의 성공률을 500% 이상 높입니다!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: '0' }} className='showcase'>
        <div className='container-fluid p-0'>
          <div className='row no-gutters'>
            <img
              src={Pain}
              className='d-none d-sm-block col-lg-6 order-lg-2 text-white showcase-img'
              alt='interview'
            />
            <img
              src={Pain}
              className='d-block d-sm-none col-lg-6 order-lg-2 text-white showcase-img'
              alt='interview'
            />
            <div className='col-lg-6 order-lg-1 showcase-text'>
              <h2>혼자하면 어렵고 같이하면 너무 쉽습니다.</h2>
              <p
                className='lead mt-4 mb-0'
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                사상 최악의 취업 불황에 취업하기 위해서는 멘토가 필요합니다.
                혼자하면 어렵고 같이하면 너무 쉽습니다. 쉽고 재밌게 취업에
                성공하세요!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: '0' }} className='showcase'>
        <div className='container-fluid p-0'>
          <div className='row no-gutters'>
            <div
              className='col-lg-6 text-white showcase-img px-3 px-sm-5'
              style={{ paddingTop: '8%', backgroundColor: '#f8f9fa' }}
            >
              <h3 style={{ textAlign: 'center', color: 'black' }}>
                구직활동에 있어 가장 어렵다고 생각되는 것은 무엇입니까?
              </h3>
              <h5 style={{ textAlign: 'right', fontSize: '1rem' }}>
                취업준비생 171명 조사 [자료제공: 고용노동부]
              </h5>
              <div className='progress'>
                <div
                  className='progress-bar bg-dark'
                  style={{ width: '25%' }}
                  aria-valuenow='25'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  지역적 불균형 7.6%
                </div>
              </div>
              <div className='progress'>
                <div
                  className='progress-bar bg-dark'
                  style={{ width: '55%' }}
                  aria-valuenow='50'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  취업정보 부족 31%
                </div>
              </div>
              <div className='progress'>
                <div
                  className='progress-bar'
                  style={{
                    width: '85%',
                    backgroundColor: '#ffe256',
                    color: 'black',
                  }}
                  aria-valuenow='75'
                  aria-valuemin='0'
                  aria-valuemax='100'
                >
                  자소서, 이력서 등 실질적 취업준비과정 52%
                </div>
              </div>
            </div>
            <div className='col-lg-6 order-lg-1 showcase-text'>
              <h2>
                인터뷰온 자소서 첨삭으로 인사담당자가 여러분의 자소서 읽을
                확률을 223% 이상 높일 수 있습니다.
              </h2>
              <p
                className='lead mt-4 mb-0'
                style={{ fontSize: '1rem', lineHeight: '1.3' }}
              >
                인터뷰온은 200건이 넘는 취업성공케이스들을 바탕으로 가장 빠르게
                효율적으로 합격할 수 있는 방법을 연구했습니다. 인터뷰온과 함께
                검증된, 최적화된 취업준비를 하세요!
              </p>
              <div className='d-flex justify-content-center'>
                <a
                  href='#products'
                  className='btn btn-solid mt-5'
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
