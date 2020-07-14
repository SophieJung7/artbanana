import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Type1 extends Component {
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
                <h2 className='title-inner1'>무료 서비스를 원하시나요?</h2>
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
                죄송합니다. 현재 아트바나나는 아직 런칭준비 중에 있어 서비스
                결재를 하실 수 없습니다.
                <div className='d-flex justify-content-center'>
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
                    인터뷰온에 문의하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Type1;
