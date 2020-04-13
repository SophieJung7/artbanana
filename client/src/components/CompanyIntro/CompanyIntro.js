import React, { Component } from 'react';

class CompanyIntro extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="bg-white py-10">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title1">
                <h4>Beta Service</h4>
                <h2 className="title-inner1">인터뷰온은?</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10 text-center mb-5 p-5">
              <div
                className="lead mb-5"
                style={{
                  lineHeight: '1.4',
                  fontSize: '1.1rem',
                  textAlign: 'left',
                }}
              >
                면접에 대한 어려움을 해결하고자 십년전 취준생이었던 선배 세명이
                모여 인터뷰온을 시작했습니다. 면접에 대한 두려움을 한방에
                날려드리겠습니다. 회사에 대한 문의, 서비스에 대한 문의 등
                저희에게 하시고 싶은 이야기가 있으시다면
                sophiecheong7@gmail.com으로 메일주시기 바랍니다. 감사합니다!
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CompanyIntro;
