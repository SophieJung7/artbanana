import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

class DetailsWithPrice extends Component {
  state = {
    quantity: 1,
    sale: true,
  };

  //   handleSizeOptionChange = (event) => {
  //     const sizeOption = event.target.value;
  //     const chosenPrice = price[sizeOption];
  //     this.setState({ sizeOption: sizeOption, price: chosenPrice });
  //   };

  render() {
    const { name, productName, price, width, height, quantity } = this.props;

    return (
      <div className='col-lg-6 rtl-text'>
        <div className='product-right'>
          <div className='d-flex align-items-center'>
            <h2
              className='d-inline'
              style={{
                fontFamily: 'Work Sans',
                fontSize: '2.3rem',
                color: '#cbcbcb',
              }}
            >
              {' '}
              ARTIST
            </h2>
            <h2
              className='d-inline ml-2'
              style={{
                fontFamily: 'Work Sans',
                fontSize: '2.3rem',
                color: '#cbcbcb',
              }}
            >
              {' '}
              |
            </h2>
            <h2
              className='d-inline ml-2'
              style={{ fontFamily: 'Nanum Gothic Coding' }}
            >
              {name}{' '}
            </h2>
          </div>
          <div className=''>
            <h3
              className='d-inline'
              style={{ fontSize: '1rem', color: '#777777' }}
            >
              {productName}
            </h3>
          </div>
          <div className=''>
            <h3
              className='d-inline'
              style={{ fontSize: '1rem', color: '#777777' }}
            >
              {`${width}cm X ${height}cm`}
            </h3>
          </div>
          <div className='mb-3'>
            <h3
              className='d-inline'
              style={{ fontSize: '1rem', color: '#777777' }}
            >
              {`리미티드에디션 한정수량 ${quantity}개`}
            </h3>
          </div>
          {this.state.sale ? (
            <div className='price-part'>
              <h4>
                <del>{`${(price * 2).toLocaleString('en')}원`}</del>
                <span
                  className='ml-1'
                  style={{ color: '#d8a6a2', fontWeight: '700' }}
                >
                  50% off
                </span>
              </h4>
              {/* Not visible on Mobile */}
              <div className='d-none d-sm-block mb-3'>
                <h3
                  className='d-inline'
                  style={{ fontFamily: 'Work Sans', fontWeight: '500' }}
                >
                  {price.toLocaleString('en')}
                </h3>
                <h4 className='d-inline ml-1' style={{ fontSize: '1rem' }}>
                  원
                </h4>
              </div>
              {/* Only visible on Mobile */}
              <div className='d-block d-sm-none mb-3'>
                <h3
                  className='d-inline'
                  style={{ fontFamily: 'Work Sans', fontWeight: '500' }}
                >
                  {price.toLocaleString('en')}
                </h3>
                <h4 className='d-inline ml-1' style={{ fontSize: '1rem' }}>
                  원
                </h4>
              </div>
            </div>
          ) : (
            <div className='price-part'>
              {/* Not visible on Mobile */}
              <div className='d-none d-sm-block mb-3'>
                <h3
                  className='d-inline'
                  style={{ fontFamily: 'Work Sans', fontWeight: '500' }}
                >
                  {price}
                </h3>
                <h4 className='d-inline ml-1' style={{ fontSize: '1rem' }}>
                  원
                </h4>
              </div>
              {/* Only visible on Mobile */}
              <div className='d-block d-sm-none mb-3'>
                <h3
                  className='d-inline'
                  style={{ fontFamily: 'Work Sans', fontWeight: '500' }}
                >
                  {price}
                </h3>
                <h4 className='d-inline ml-1' style={{ fontSize: '1rem' }}>
                  원
                </h4>
              </div>
            </div>
          )}

          <div className='product-description border-product'>
            <h6 className='product-title'>주문수량</h6>
            <div className='qty-box'>
              <div className='input-group'>
                <span className='input-group-prepend'>
                  <button
                    type='button'
                    className='btn quantity-left-minus'
                    onClick={() => {
                      let quantity = this.state.quantity;
                      quantity -= 1;
                      this.setState({ quantity: quantity });
                    }}
                    data-type='minus'
                    data-field=''
                  >
                    <FaAngleLeft />
                  </button>
                </span>
                <input
                  type='text'
                  name='quantity'
                  value={this.state.quantity}
                  onChange={() => {}}
                  className='form-control input-number'
                />
                <span className='input-group-prepend'>
                  <button
                    type='button'
                    className='btn quantity-right-plus'
                    onClick={() => {
                      let quantity = this.state.quantity;
                      quantity += 1;
                      this.setState({ quantity: quantity });
                    }}
                    data-type='plus'
                    data-field=''
                  >
                    <FaAngleRight />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className='product-buttons'>
            <Link
              to={`${process.env.PUBLIC_URL}/checkout`}
              className='btn btn-solid'
              style={{
                backgroundImage:
                  'linear-gradient(30deg, #f8d5ce 50%, transparent 50%)',
                border: 'none',
                fontWeight: '600',
              }}
            >
              지금 주문하기
            </Link>
          </div>
          <div className='border-product'>
            <h6 className='mb-2 product-title'>제품 상세정보</h6>
            <p className='mb-3'>
              아트바나나의 모든 작품들은 아티스트가 100% 손으로 정성을 다해
              그립니다. <br /> 제품에 대해 궁금한게 있으신가요?
            </p>
            {/* <div className='product-buttons'> */}
            <Link
              to={`${process.env.PUBLIC_URL}/checkout`}
              className='btn btn-solid'
              style={{
                backgroundImage:
                  'linear-gradient(30deg, #cfd4da 50%, transparent 50%)',
                border: 'none',
              }}
            >
              제품 문의하기
            </Link>
            {/* </div> */}
          </div>
          <div className='d-none d-sm-block border-product'>
            <h6 className='mb-2 product-title'>SNS에 공유하기</h6>
            <div className='product-icon'>
              <ul className='product-social'>
                <li>
                  <a href='https://www.facebook.com/'>
                    <FaFacebook style={{ fontSize: '2rem' }} />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/'>
                    <FaTwitter style={{ fontSize: '2rem' }} />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/'>
                    <FaInstagram style={{ fontSize: '2rem' }} />
                  </a>
                </li>
              </ul>
              {/* <button
                className='wishlist-btn'
                onClick={() => addToWishlistClicked(item)}
              >
                <i className='fa fa-heart'></i>
                <span className='title-font'>Add To WishList</span>
              </button> */}
            </div>
          </div>
          {/* <div className='border-product'>
            <h6 className='product-title'>남은 세일기간</h6>
            <div className='timer'>
              <p id='demo'>
                <span>
                  25
                  <span className='padding-l'>:</span>
                  <span className='timer-cal'>일</span>
                </span>
                <span>
                  22
                  <span className='padding-l'>:</span>
                  <span className='timer-cal'>시간</span>
                </span>
                <span>
                  13
                  <span className='padding-l'>:</span>
                  <span className='timer-cal'>분</span>
                </span>
                <span>
                  57
                  <span className='timer-cal'>초</span>
                </span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default DetailsWithPrice;
