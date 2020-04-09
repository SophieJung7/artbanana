import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../Subscribe/Subscribe';
import { MdCopyright } from 'react-icons/md';
import { SlideUpDown } from './script';
import { FaKiwiBird } from 'react-icons/fa';
import visa from '../../assets/icons/visa.png';
import master from '../../assets/icons/mastercard.png';

class Footer extends Component {
  componentDidMount() {
    var contentwidth = window.innerWidth;
    if (contentwidth < 750) {
      SlideUpDown('footer-title');
    } else {
      var elems = document.querySelectorAll('.footer-title');
      [].forEach.call(elems, function (elemt) {
        let el = elemt.nextElementSibling;
        el.style = 'display: block';
      });
    }
  }

  render() {
    return (
      <div>
        <Subscribe />
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
                          <FaKiwiBird
                            className='d-inline mr-2'
                            style={{ fontSize: '2rem', color: 'black' }}
                          />
                          <div className='d-inline catcnap-logo-text mt-1'>
                            Interview
                            <div
                              className='d-inline'
                              style={{ color: 'black' }}
                            >
                              On
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <p>
                      인터뷰온은 모의면접을 주로 면접을 속성과외하는
                      플랫폼입니다. 면접 속성과외를 통해 면접에 대한 두려움을
                      확실히 날려드리겠습니다.
                    </p>
                    <div className='mt-5'>
                      <Link to='/' className='btn btn-solid mb-3'>
                        카카오톡 1:1 채팅상담
                      </Link>
                      <p>영업시간: 11:00 - 22:00</p>
                      <p>카카오톡 아이디: interviewon</p>
                    </div>
                  </div>
                </div>
                <div className='col'></div>
                <div className='col'>
                  <div className='sub-title'>
                    <div className='footer-title'>
                      <h4 className='mt-4'>인터뷰온</h4>
                    </div>
                    <div className='footer-contant'>
                      <Link className='text-dark' to='/about'>
                        회사소개
                      </Link>
                      <Link className='text-dark d-block' to='/about'>
                        채용
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
                      회사명 인터뷰온 | 대표 정혜정 | 개인정보보호책임자 정혜정
                      | 본사주소 서울시 강남구 서초대로 396 | 이메일
                      help@interviewon.co.kr <br /> <MdCopyright />
                      IntervewOn. All rights reserved.
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
      </div>
    );
  }
}

export default Footer;
