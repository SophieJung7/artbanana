import React from 'react';
import Slider from 'react-slick';
import { withTranslate } from 'react-redux-multilingual';
import couplePool from '../../../assets/photos/couple-pool.jpg';

const Jumbotron = ({ translate }) => {
  return (
    // <header className="masthead d-flex align-items-center">
    //   <div className="container">
    //     <div className="intro-text">
    //       <div className="intro-text-bg" style={{ color: 'white' }}>
    //         {translate('Jumbo_big_words')}
    //       </div>
    //       <div className="intro-text-sm" style={{ color: 'white' }}>
    //         {translate('Jumbo_small_words')}
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <div>
      <Slider className="slide-1 home-slider">
        <div>
          <div className="home-jumbo home-jumbo1 p-center text-center bg-size blur-up lazyloaded">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h1>인생스냅은 캣스냅!</h1>
                      <h4>
                        전세계 최고의 사진작가들에게 인생스냅을 의뢰하세요.
                      </h4>
                      <a href="#" className="btn btn-solid">
                        캣스냅이란?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="home-jumbo home-jumbo2 p-center text-center bg-size blur-up lazyloaded">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h1>인생스냅은 캣스냅!</h1>
                      <h4>
                        전세계 최고의 사진작가들에게 인생스냅을 의뢰하세요.
                      </h4>
                      <a href="#" className="btn btn-solid">
                        캣스냅이란?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="home-jumbo home-jumbo3 p-center text-center bg-size blur-up lazyloaded">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h1>인생스냅은 캣스냅!</h1>
                      <h4>
                        전세계 최고의 사진작가들에게 인생스냅을 의뢰하세요.
                      </h4>
                      <a href="#" className="btn btn-solid">
                        캣스냅이란?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="home-jumbo home-jumbo4 p-center text-center bg-size blur-up lazyloaded">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h1>인생스냅은 캣스냅!</h1>
                      <h4 style={{ color: 'black' }}>
                        전세계 최고의 사진작가들에게 인생스냅을 의뢰하세요.
                      </h4>
                      <a href="#" className="btn btn-solid">
                        캣스냅이란?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="home-jumbo home-jumbo5 p-center text-center bg-size blur-up lazyloaded">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h1>인생스냅은 캣스냅!</h1>
                      <h4 style={{ color: 'black' }}>
                        전세계 최고의 사진작가들에게 인생스냅을 의뢰하세요.
                      </h4>
                      <a href="#" className="btn btn-solid">
                        캣스냅이란?
                      </a>
                    </div>
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
