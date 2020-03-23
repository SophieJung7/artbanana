import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';
import { SlideUpDown } from './script';

import catLogo from '../../assets/logos/cat.svg';
import visa from '../../assets/icons/visa.png';
import master from '../../assets/icons/mastercard.png';

class Footer extends Component {
  componentDidMount() {
    var contentwidth = window.innerWidth;
    if (contentwidth < 750) {
      SlideUpDown('footer-title');
    } else {
      var elems = document.querySelectorAll('.footer-title');
      [].forEach.call(elems, function(elemt) {
        let el = elemt.nextElementSibling;
        el.style = 'display: block';
      });
    }
  }

  render() {
    return (
      <footer className='footer-light'>
        <section className='section-b-space light-layout'>
          <div className='container'>
            <div className='row footer-theme partition-f'>
              <div className='col-lg-4 col-md-6'>
                <div className='footer-title footer-mobile-title'>
                  <h4>회사소개</h4>
                </div>
                <div className='footer-contant'>
                  <div className='footer-logo'>
                    <Link to='/'>
                      <div
                        className='d-flex align-items-center'
                        style={{ paddingTop: '2vh', paddingBottom: '2vh' }}
                      >
                        <div className='d-inline mr-2'>
                          <img
                            src={catLogo}
                            width='30'
                            height='30'
                            className='align-top'
                            alt=''
                          ></img>
                        </div>
                        <div className='d-inline catcnap-logo-text mt-1'>
                          CatSnap
                        </div>
                      </div>
                    </Link>
                  </div>
                  <p>
                    캣스냅은 최고의 사진작가들을 찾아 전세계 곳곳을
                    돌아다녔습니다. 소중한 추억을 전문가의 예술적인 작품속에
                    담고 싶다면 캣스냅을 찾아주세요!
                  </p>
                  <div className='mt-5'>
                    <Link to='/' className='btn btn-solid mb-3'>
                      카카오톡 1:1 채팅상담
                    </Link>
                    <p>영업시간: 11:00 - 22:00</p>
                    <p>카카오톡 아이디: catsnap</p>
                  </div>

                  {/* <div className='footer-social'>
                    
                  </div> */}
                </div>
              </div>
              <div className='col'></div>
              <div className='col'>
                <div className='sub-title'>
                  <div className='footer-title'>
                    <h4 className='mt-4'>캣스냅</h4>
                  </div>
                  <div className='footer-contant'>
                    <Link className='text-dark' to='/about'>
                      회사소개
                    </Link>
                    <Link className='text-dark d-block' to='/about'>
                      채용
                    </Link>
                    <Link className='text-dark' to='/about'>
                      사진작가 등록하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='sub-footer '>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-8 col-md-6 col-sm-12'>
                <div className='footer-end'>
                  <p style={{ fontSize: '0.8rem' }}>
                    회사명 캣스냅 | 대표 정혜정 | 개인정보보호책임자 정혜정 |
                    본사주소 The Morrison, 28 Yat Sin St, Hong Kong | 이메일
                    help@catsnap.app <br /> <MdCopyright />
                    CatSnap. All rights reserved.
                  </p>
                </div>
              </div>
              <div className='col-xl-4 col-md-6 col-sm-12'>
                <div className='payment-card-bottom'>
                  <ul>
                    <li>
                      <a href='#'>
                        <img src={visa} alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src={master} alt='' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
