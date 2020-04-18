import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../Subscribe/Subscribe';
import { MdCopyright } from 'react-icons/md';
import { FaKiwiBird } from 'react-icons/fa';
import visa from '../../assets/icons/visa.png';
import master from '../../assets/icons/mastercard.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <Subscribe />
        <footer className="footer-light">
          <section className="section-b-space light-layout">
            <div className="container">
              <div className="row footer-theme partition-f">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-contant">
                    <div className="footer-logo">
                      <Link to="/">
                        <div
                          className="d-flex align-items-center"
                          style={{ paddingTop: '2vh', paddingBottom: '2vh' }}
                        >
                          <FaKiwiBird
                            className="d-inline mr-2"
                            style={{ fontSize: '2rem', color: 'black' }}
                          />
                          <div className="d-inline catcnap-logo-text mt-1">
                            Interview
                            <div
                              className="d-inline"
                              style={{ color: 'black' }}
                            >
                              On
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <p>
                      인터뷰온에서는 대기업, 공기업, 외국계기업에서 5년 이상
                      근무한 취업전문가들을 만나실 수 있습니다. 취업전문가들을
                      통해 본인의 강점을 찾아내고 실무를 정확히 파악해 취업에
                      성공하실 수 있다고 장담합니다. 취준생을 응원합니다!
                    </p>
                    <div className="mt-5">
                      <Link to="/contactus" className="btn btn-solid mb-3">
                        인터뷰온 상담하기
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
                <div className="col" style={{ marginTop: '5vh' }}>
                  <div className="sub-title">
                    <div className="footer-title">
                      <h4 className="mt-4 mb-2">인터뷰온</h4>
                    </div>
                    <div className="footer-contant mt-4">
                      <Link className="text-dark" to="/aboutus">
                        회사소개
                      </Link>
                      <Link className="text-dark d-block" to="/aboutus">
                        채용
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="sub-footer ">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-md-6 col-sm-12">
                  <div className="footer-end">
                    <p style={{ fontSize: '0.8rem' }}>
                      회사명 인터뷰온 | 대표 정혜정 | 개인정보보호책임자 정혜정
                      | 본사주소 서울시 강남구 서초대로 396 | 이메일
                      help@interviewon.co.kr <br /> <MdCopyright />
                      IntervewOn. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="payment-card-bottom">
                    <ul>
                      <li>
                        <a href="/">
                          <img src={visa} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src={master} alt="" />
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
