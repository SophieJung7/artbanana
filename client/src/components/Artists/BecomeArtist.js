import React, { Component } from 'react';
import TitleTemp from '../TitleTemp';
import { FaRegCheckCircle } from 'react-icons/fa';

const products = [
  {
    name: 'Pencil Drawing',
    price: '사진정밀묘사(연필, 색연필 등)',
    des1:
      '고객이 의뢰한 사진을 연필 및 기타소재를 통해 드로잉작품을 만드는 것입니다.',
    des2:
      '배송에 평일기준 10일을 원칙으로 하기 때문에 충분한 시간을 갖고 작품을 만드실 수 있습니다.',
    des3: '가격을 직접 지정하실 수 있습니다.',
  },
  {
    name: 'Caricature',
    price: '사진캐리커처(연필, 색연필 등)',
    des1:
      '고객이 의뢰한 사진을 연필 및 기타소재를 통해 캐리커처로 표현하는 것입니다.',
    des2:
      '배송에 평일기준 10일을 원칙으로 하기 때문에 충분한 시간을 갖고 작품을 만드실 수 있습니다.',
    des3: '가격을 직접 지정하실 수 있습니다.',
  },
  {
    name: 'Digital Illustration',
    price: '사진일러스트레이션(디지털)',
    des1:
      '고객이 의뢰한 사진을 디지털미디어(포토샵, 일러스트레이터등)를 통해 작품을 만드는 것으로 폭넓게 표현하실 수 있습니다.',
    des2:
      '배송에 평일기준 10일을 원칙으로 하기 때문에 충분한 시간을 갖고 작품을 만드실 수 있습니다.',
    des3: '가격을 직접 지정하실 수 있습니다.',
  },
  {
    name: 'Photo Art',
    price: '사진아트',
    des1:
      '고객이 의뢰한 사진/사진들을 포토샵, 프린트 기법등을 통해 작품으로 표현하는 것입니다.',
    des2:
      '배송에 평일기준 10일을 원칙으로 하기 때문에 충분한 시간을 갖고 작품을 만드실 수 있습니다.',
    des3: '가격을 직접 지정하실 수 있습니다.',
  },
];

class BecomeArtist extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  renderProducts() {
    return products.map(({ name, price, des1, des2, des3 }, index) => {
      return (
        <div key={index} className='col-lg-3 col-md-6 mb-5'>
          <div
            className='card lift border-bottom-lg border-red'
            style={{ borderBottomColor: '#b5dccd' }}
          >
            <div className='card-body text-center'>
              <div className='text-secondary'>{name}</div>
              <div style={{ fontSize: '1.2rem' }}>{price}</div>
            </div>
            <ul
              className='fa-ul pricing-list mb-4 pr-2'
              style={{ color: '#d8a6a2' }}
            >
              <li className='pricing-list-item'>
                <span className='fa-li'>
                  <FaRegCheckCircle />
                </span>
                <span className='text-dark' style={{ fontSize: '0.9rem' }}>
                  {des1}
                </span>
              </li>
              <li className='pricing-list-item'>
                <span className='fa-li'>
                  <FaRegCheckCircle />
                </span>
                <span className='text-dark' style={{ fontSize: '0.9rem' }}>
                  {des2}
                </span>
              </li>
              <li className='pricing-list-item'>
                <span className='fa-li'>
                  <FaRegCheckCircle />
                </span>
                <span className='text-dark' style={{ fontSize: '0.9rem' }}>
                  {des3}
                </span>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className='container'>
        <TitleTemp
          bigTitle='아트바나나 아티스트란?'
          subTitle='Join ArtBanana Artists Network!'
        />
        <div className='d-flex justify-content-center mb-3'>
          <div className='col-sm-6' style={{ display: 'inline-block' }}>
            <div className='classic-effect d-flex justify-content-center'>
              <img
                src='https://artbanana.s3.ap-northeast-2.amazonaws.com/website/sistine.jpg'
                className='img-fluid'
                alt=''
              />
              <span />
            </div>

            <div className='blog-details'>
              <h4 style={{ color: 'grey', lineHeight: '1.4' }}>
                예술로 세상을 아름답게 만들 아티스트를 찾습니다!
              </h4>
            </div>
          </div>
        </div>
        {/* <div
          className='col py-3'
          style={{ backgroundColor: '#b5dccd', textAlign: 'center' }}
        >
          <h4 style={{ lineHeight: '1.4' }}>
            아트바나나의 정식 오픈일은 11월 15일로 이 전에 가입하신 작가님들에
            한해 2021년 3월 15일까지 모든 거래대금에 대한 수수료가 없습니다.
            <br />
            (단 고객이 카드로 결재할 경우 카드수수료 5% 제외) 이 후 모든
            수수료는 25%로 책정됩니다.
          </h4>
        </div> */}
        <div className='row mt-5' style={{ marginBottom: '0' }}>
          {this.renderProducts()}
        </div>
        <div className='d-flex justify-content-center'>
          <a
            href='/api/attempt/artist'
            className='btn btn-solid mt-5 px-5 py-4'
            style={{
              backgroundImage:
                'linear-gradient(30deg, black 50%, transparent 50%)',
              border: 'none',
              fontSize: '1.1rem',
              color: 'white',
            }}
          >
            아티스트 지원하기
          </a>
        </div>
      </div>
    );
  }
}

export default BecomeArtist;
