import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../Subscribe/Subscribe';
import { MdCopyright } from 'react-icons/md';
import visa from '../../assets/icons/visa.png';
import master from '../../assets/icons/mastercard.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <Subscribe />
        <footer className='footer-light'>
          <section className='section-b-space light-layout'>
            <div className='container'>
              <div className='row footer-theme partition-f'>
                <div className='col-lg-4 col-md-6'>
                  <div className='footer-contant'>
                    <div className='footer-logo'>
                      <Link to='/'>
                        <div
                          className='d-flex align-items-center'
                          style={{ paddingTop: '2vh', paddingBottom: '2vh' }}
                        >
                          <div className='d-inline mr-2'>
                            <img
                              src='/logo.svg'
                              width='30'
                              height='30'
                              className='align-top'
                              alt=''
                            />
                          </div>
                          <div
                            className='d-inline mt-1'
                            style={{
                              fontFamily: 'Work Sans',
                              color: 'black',
                              fontWeight: '500',
                              fontSize: '1.5rem',
                            }}
                          >
                            ART
                            <div
                              className='d-inline'
                              style={{ color: '#b5dccd' }}
                            >
                              |
                            </div>
                            BANANA
                          </div>
                        </div>
                      </Link>
                    </div>
                    <p>
                      우리는 예술의 힘을 믿고, 예술가들을 응원합니다. <br />
                      사랑, 예술, 로맨스, 아름다움... <br />
                      이것이 우리가 삶을 사는 이유이기 때문입니다.
                    </p>
                    <div className='mt-5'>
                      <Link to='/contactus' className='btn btn-solid mb-3'>
                        아트바나나에 문의하기
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col'></div>
                <div className='col' style={{ marginTop: '5vh' }}>
                  <div className='sub-title'>
                    <div className='footer-title'>
                      <h4 className='mt-4 mb-2'>아트바나나</h4>
                    </div>
                    <div className='footer-contant mt-4'>
                      <Link className='text-dark' to='/aboutus'>
                        회사소개
                      </Link>
                      <Link className='text-dark d-block' to='/aboutus'>
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
                      회사명 아트바나나 | 정혜정 | 개인정보보호책임자 정혜정 |
                      본사주소 The Zenith, 258 Queen's Road East, Wan Chai, Hong
                      Kong | 이메일 sophie@artbanana.co.kr <br />{' '}
                      <MdCopyright />
                      ArtBanana. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6 col-sm-12'>
                  <div className='payment-card-bottom'>
                    <ul>
                      <li>
                        <a href='/'>
                          <img src={visa} alt='' />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
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
