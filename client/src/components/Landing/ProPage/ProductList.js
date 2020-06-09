import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle, FaExclamation } from 'react-icons/fa';

const products = [
  {
    name: '이력서 및 자소서 컨설팅',
    price: '155,000',
    des1: '이력서 및 자소서 양식 제공',
    des2: '강점 및 경험 파악을 위한 전화 컨설팅',
    des3: '이력서 및 자소서 재작성, 수정, 보완해 발송함',
  },
  {
    name: '1회 수업 이용권',
    price: '95,000',
    des1: '1회 화상 면접속성과외(모의면접, 속성과외)',
    des2: '면접스터디자료(PDF) 제공',
    des3: '수업 후 보강할 사항에 대한 개인 맞춤자료 작성 및 발송',
  },
  {
    name: '1개월 수업 이용권(30%할인)',
    price: '266,000',
    des1: '4회 화상 면접속성과외(모의면접, 속성과외)',
    des2: '면접스터디자료(PDF) 제공',
    des3: '수업 후 보강할 사항에 대한 개인 맞춤자료 작성 및 발송',
  },
  {
    name: '2개월 수업 이용권(40%할인)',
    price: '456,000',
    des1: '8회 화상 면접속성과외(모의면접, 속성과외)',
    des2: '면접스터디자료(PDF) 제공',
    des3: '수업 후 보강할 사항에 대한 개인 맞춤자료 작성 및 발송',
  },
];

class ProductList extends Component {
  renderProducts() {
    return products.map(({ name, price, des1, des2, des3 }, index) => {
      return (
        <div key={index} className='col-lg-3 col-md-6 mb-5'>
          <div
            className='card lift border-bottom-lg border-red'
            style={{ borderBottomColor: '#4df6c0' }}
          >
            <div className='card-body text-center'>
              <div className='text-secondary'>{name}</div>
              <div style={{ fontSize: '1.4rem' }}>{`${price} 원`}</div>
            </div>
            <ul
              className='fa-ul pricing-list mb-4'
              style={{ color: '#ffe256' }}
            >
              <li className='pricing-list-item'>
                <span className='fa-li'>
                  <FaRegCheckCircle />
                </span>
                <span className='text-dark' style={{ fontSize: '1rem' }}>
                  {des1}
                </span>
              </li>
              <li className='pricing-list-item'>
                <span className='fa-li'>
                  <FaRegCheckCircle />
                </span>
                <span className='text-dark' style={{ fontSize: '1rem' }}>
                  {des2}
                </span>
              </li>
              <li className='pricing-list-item'>
                <span className='fa-li'>
                  <FaRegCheckCircle />
                </span>
                <span className='text-dark' style={{ fontSize: '1rem' }}>
                  {des3}
                </span>
              </li>
            </ul>
            <div className='d-flex justify-content-center mb-5'>
              <Link
                to={`/sorry/type${index}`}
                className='btn btn-solid'
                style={{
                  fontSize: '1rem',
                  border: 'none',
                  backgroundImage:
                    'linear-gradient(50deg, #ff73ca 50%, transparent 50%)',
                }}
              >
                선생님 예약하기
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className='mt-5'>
        <h2 className='mb-4' style={{ fontSize: '1.8rem' }}>
          수업 가격
        </h2>
        <div className='container' style={{ paddingLeft: '0' }}>
          <div>
            <FaExclamation />
            <p className='d-inline' style={{ color: 'black' }}>
              인터뷰온의 모든 수업은 1회에 1시간으로 운영되며, 30분 모의 면접/
              30분 컨설팅으로 구성됩니다.
            </p>
          </div>
          <div>
            <FaExclamation />
            <p className='d-inline' style={{ color: 'red', fontWeight: '800' }}>
              처음 이용시엔 50% 할인코드 FIRST를 사용할 수 있습니다. 결재시에
              FIRST를 입력해주세요! 5월 15일까지만 적용됩니다.
            </p>
          </div>
        </div>
        <div className='row mt-5' style={{ marginBottom: '0' }}>
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default ProductList;
