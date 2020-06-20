import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

class PortfolioList extends Component {
  render() {
    return (
      <div className='product-box'>
        <div className='img-wrapper'>
          <div className='front'>
            <Link
              to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}
            >
              <img src={} className='img-fluid' alt='' />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioList;
