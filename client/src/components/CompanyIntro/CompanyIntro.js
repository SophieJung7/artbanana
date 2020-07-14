import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyIntro extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className='bg-white py-10'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='title1'>
                <h4>Beta Service</h4>
                <h2 className='title-inner1'>아트바나나는?</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-8 col-md-10 text-center mb-5 p-5'>
              <div
                className='lead mb-5'
                style={{
                  lineHeight: '1.4',
                  fontSize: '1.1rem',
                  textAlign: 'left',
                }}
              >
                우리는 예술의 힘을 믿고, 예술가들을 응원합니다!
                <br />
                예술가들의 정성이 담긴 제품들을 아트바나나에서 만나보세요!
              </div>
              <Link
                to='/contactus'
                className='btn btn-solid mt-5'
                style={{
                  fontSize: '1.2rem',
                  border: 'none',
                  backgroundImage:
                    'linear-gradient(50deg, #ff73ca 50%, transparent 50%)',
                }}
              >
                아트바나나에 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CompanyIntro;
