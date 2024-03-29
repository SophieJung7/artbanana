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
    sizeOption: 'sm',
    price: {},
    chosenPrice: 0,
  };

  componentDidMount() {
    if (this.props.price) {
      this.setState({ price: this.props.price });
      this.setState({ chosenPrice: this.props.price.sm });
    }
  }

  handleSizeOptionChange = (event) => {
    const sizeOption = event.target.value;
    const chosenPrice = this.state.price[sizeOption];
    this.setState({ sizeOption: sizeOption, chosenPrice: chosenPrice });
  };

  render() {
    const { name, productName } = this.props;

    return (
      <div className='col-lg-4 rtl-text'>
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
            {/* <h3
              className='d-inline'
              style={{ fontSize: '1rem', color: '#777777' }}
            >
              {`${width}cm X ${height}cm`}
            </h3> */}
          </div>
          <div className='mb-3'>
            {/* <h3
              className='d-inline'
              style={{ fontSize: '1rem', color: '#777777' }}
            >
              {`리미티드에디션 한정수량 ${quantity}개`}
            </h3> */}
          </div>
          {this.state.sale ? (
            <div className='price-part'>
              <h4>
                <del>{`${this.state.chosenPrice.toLocaleString('en')}원`}</del>
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
                  {(this.state.chosenPrice * 0.5).toLocaleString('en')}
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
                  {(this.state.chosenPrice * 0.5).toLocaleString('en')}
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
                  {this.state.chosenPrice}
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
                  {this.state.chosenPrice}
                </h3>
                <h4 className='d-inline ml-1' style={{ fontSize: '1rem' }}>
                  원
                </h4>
              </div>
            </div>
          )}
          <div className='product-description border-product'>
            <div className='mb-4'>
              <h6 className='product-title size-text'>
                작품 사이즈를 선택해주세요.
              </h6>
              <div>
                <div className='radio-item'>
                  <input
                    type='radio'
                    value='sm'
                    id='sm'
                    name='options'
                    checked={this.state.sizeOption === 'sm'}
                    onChange={this.handleSizeOptionChange}
                  />
                  <label htmlFor='sm'>
                    S (A5사이즈/ 148mm X 210mm/ 최대 오브젝트 1명)
                  </label>
                </div>
                <div className='radio-item'>
                  <input
                    type='radio'
                    value='md'
                    id='md'
                    name='options'
                    checked={this.state.sizeOption === 'md'}
                    onChange={this.handleSizeOptionChange}
                  />
                  <label htmlFor='md'>
                    M (A4사이즈/ 210mm X 297mm/ 최대 오브젝트 2명)
                  </label>
                </div>
                <div className='radio-item'>
                  <input
                    type='radio'
                    value='lg'
                    id='lg'
                    name='options'
                    checked={this.state.sizeOption === 'lg'}
                    onChange={this.handleSizeOptionChange}
                  />
                  <label htmlFor='lg'>
                    L (A3사이즈/ 297mm X 420mm/ 최대 오브젝트 4명)
                  </label>
                </div>
                <div className='radio-item'>
                  <input
                    type='radio'
                    value='xl'
                    id='xl'
                    name='options'
                    checked={this.state.sizeOption === 'xl'}
                    onChange={this.handleSizeOptionChange}
                  />
                  <label htmlFor='xl'>
                    XL (A2사이즈/ 420mm X 594mm/ 최대 오브젝트 5명)
                  </label>
                </div>
              </div>
            </div>
            <span className='instock-cls'>{this.state.stock}</span>
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
