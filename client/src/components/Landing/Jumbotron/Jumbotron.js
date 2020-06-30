import React from 'react';
import Slider from 'react-slick';
import { withTranslate } from 'react-redux-multilingual';

const Jumbotron = ({ translate }) => {
  return (
    <div>
      <Slider className='slide-1 home-slider'>
        <div>
          <div className='home-jumbo home-jumbo1 p-center text-center bg-size blur-up lazyloaded'>
            <div className='container'>
              <div className='d-none d-sm-block row'>
                <div className='col'>
                  <div
                    className='slider-contain'
                    style={{ justifyContent: 'left' }}
                  >
                    <div className='ml-5'>
                      <h1 style={{ fontSize: '2.7rem', lineHeight: '1.4' }}>
                        평생 남기고 싶은 사진을 <br /> 예술작품으로 만드세요!
                      </h1>
                      <h4 className='my-4'>
                        국내 최고의 아티스트들에게 작품을 의뢰하세요.
                      </h4>
                      <a
                        href='/'
                        className='btn btn-solid'
                        style={{
                          backgroundImage:
                            'linear-gradient(30deg, black 50%, transparent 50%)',
                          border: 'none',
                          color: 'white',
                          fontSize: '1.1rem',
                        }}
                      >
                        아티스트 살펴보기
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-block d-sm-none row'>
                <div className='col'>
                  <div className='slider-contain' style={{ height: '40vh' }}>
                    <div>
                      <h1>
                        평생 남기고 싶은 사진을 <br /> 예술작품으로 만드세요!
                      </h1>
                      <h4 className='my-4'>
                        국내 최고의 아티스트들에게 작품을 의뢰하세요.
                      </h4>
                    </div>
                  </div>
                  <div className='mt-5 pt-5'>
                    <a
                      href='/'
                      className='btn btn-solid'
                      style={{
                        backgroundImage:
                          'linear-gradient(30deg, black 50%, transparent 50%)',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.1rem',
                      }}
                    >
                      아티스트 살펴보기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='home-jumbo home-jumbo2 p-center text-center bg-size blur-up lazyloaded'>
            <div className='container'>
              <div className='d-none d-sm-block row'>
                <div className='col'>
                  <div className='slider-contain' style={{ height: '50vh' }}>
                    <div>
                      <h1 style={{ fontSize: '2.7rem', lineHeight: '1.4' }}>
                        세상에 하나뿐인 특별한 작품으로 <br /> 집을 환하게
                        밝혀보세요!
                      </h1>
                      <h4 className='my-4'>
                        국내 최고의 아티스트들에게 작품을 의뢰하세요.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='mt-5'>
                  <a
                    href='/'
                    className='btn btn-solid'
                    style={{
                      backgroundImage:
                        'linear-gradient(30deg, black 50%, transparent 50%)',
                      border: 'none',
                      color: 'white',
                      fontSize: '1.1rem',
                    }}
                  >
                    아티스트 살펴보기
                  </a>
                </div>
              </div>
              <div className='d-block d-sm-none row'>
                <div className='col'>
                  <div className='slider-contain' style={{ height: '40vh' }}>
                    <div>
                      <h1>
                        세상에 하나뿐인 작품으로 <br /> 집을 환하게 밝혀보세요!
                      </h1>
                      <h4 className='my-4'>
                        국내 최고의 아티스트들에게 작품을 의뢰하세요.
                      </h4>
                    </div>
                  </div>
                  <div className='mt-5 pt-5'>
                    <a
                      href='/'
                      className='btn btn-solid'
                      style={{
                        backgroundImage:
                          'linear-gradient(30deg, black 50%, transparent 50%)',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.1rem',
                      }}
                    >
                      아티스트 살펴보기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='home-jumbo home-jumbo3 p-center text-center bg-size blur-up lazyloaded'>
            <div className='container'>
              <div className='d-none d-sm-block row'>
                <div className='col'>
                  <div
                    className='slider-contain'
                    style={{ justifyContent: 'left' }}
                  >
                    <div className='ml-5'>
                      <h1 style={{ fontSize: '2.7rem', lineHeight: '1.4' }}>
                        배송에 2주가 걸린다고요?
                      </h1>
                      <h4 className='my-4'>
                        네, 저희는 아티스트가 직접 손으로 한땀, 한땀 <br />
                        정성을 다해 그리기 때문에 최대 2주가 걸립니다!
                      </h4>
                      <a
                        href='/'
                        className='btn btn-solid'
                        style={{
                          backgroundImage:
                            'linear-gradient(30deg, black 50%, transparent 50%)',
                          border: 'none',
                          color: 'white',
                          fontSize: '1.1rem',
                        }}
                      >
                        작품 주문방법
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-block d-sm-none row'>
                <div className='col'>
                  <div className='slider-contain' style={{ height: '40vh' }}>
                    <div>
                      <h1>배송에 2주가 걸린다고요?</h1>
                      <h4 className='my-4'>
                        네, 저희는 아티스트가 직접 손으로 한땀, 한땀 <br />
                        정성을 다해 그리기 때문에 최대 2주가 걸립니다!
                      </h4>
                    </div>
                  </div>
                  <div className='mt-5 pt-5'>
                    <a
                      href='/'
                      className='btn btn-solid'
                      style={{
                        backgroundImage:
                          'linear-gradient(30deg, black 50%, transparent 50%)',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.1rem',
                      }}
                    >
                      작품 주문방법
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='home-jumbo home-jumbo4 p-center text-center bg-size blur-up lazyloaded'>
            <div className='container'>
              <div className='d-none d-sm-block row'>
                <div className='col'>
                  <div
                    className='slider-contain'
                    style={{ justifyContent: 'flex-end' }}
                  >
                    <div className='ml-5'>
                      <h1 style={{ fontSize: '2.7rem', lineHeight: '1.4' }}>
                        손으로 만든 특별한 작품을 <br />
                        소중한 사람에게 선물하세요!
                      </h1>
                      <h4 className='my-4'>
                        아티스트의 숨결이 담긴 작품은 기억에 오랫동안 남을
                        추억이 될 것입니다.
                      </h4>
                      <a
                        href='/'
                        className='btn btn-solid'
                        style={{
                          backgroundImage:
                            'linear-gradient(30deg, black 50%, transparent 50%)',
                          border: 'none',
                          color: 'white',
                          fontSize: '1.1rem',
                        }}
                      >
                        아티스트 살펴보기
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-block d-sm-none row'>
                <div className='col'>
                  <div className='slider-contain' style={{ height: '40vh' }}>
                    <div>
                      <h1>
                        손으로 만든 특별한 작품을 <br />
                        소중한 사람에게 선물하세요!
                      </h1>
                      <h4 className='my-4'>
                        아티스트의 숨결이 담긴 작품은 기억에 오랫동안 남을
                        추억이 될 것입니다.
                      </h4>
                    </div>
                  </div>
                  <div className='mt-5 pt-5'>
                    <a
                      href='/'
                      className='btn btn-solid'
                      style={{
                        backgroundImage:
                          'linear-gradient(30deg, black 50%, transparent 50%)',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.1rem',
                      }}
                    >
                      작품 주문방법
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default withTranslate(Jumbotron);
