import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      image: '',
    };
  }

  onClickHandle(img) {
    this.setState({ image: img });
  }

  render() {
    const { product } = this.props;

    let RatingStars = [];
    for (var i = 0; i < product.rating; i++) {
      RatingStars.push(<i className='fa fa-star' key={i}></i>);
    }

    return (
      <div className='product-box'>
        <div className='img-wrapper'>
          <div className='front'>
            <Link
              to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}
            >
              <img
                src={
                  product.variants
                    ? this.state.image
                      ? this.state.image
                      : product.variants[0].images
                    : product.pictures[0]
                }
                className='img-fluid'
                alt=''
              />
            </Link>
          </div>
        </div>
        <div className='product-detail'>
          <div>
            <Link
              to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}
            >
              <h6>{product.name}</h6>
            </Link>
            <h4>
              {product.price - (product.price * product.discount) / 100}원
              <del>
                <span className='money'>{product.price}원</span>
              </del>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
