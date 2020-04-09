import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from 'react-icons/io';
import { FaUserNinja } from 'react-icons/fa';

const Reviews = require('./Reviews');

class ReviewSideCard extends Component {
  renderReviews() {
    return Reviews.map(({ name, review, reviewScore }) => {
      return (
        <div class='d-flex align-items-center mb-4'>
          <div class='avatar avatar-lg'>
            <FaUserNinja
              class='avatar-img'
              style={{
                height: '5em',
                width: '5em',
                backgroundColor: '#f8f9fa',
                padding: '1.2rem',
              }}
            />
          </div>
          <div class='ml-3'>
            <div
              style={{ color: '#ffce03', fontSize: '1.2rem' }}
              className='mb-2 text-left d-inline'
            >
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <a class='text-dark' href='#!'>
              <h6 class='mb-1' style={{ fontSize: '0.9rem' }}>
                {review}
              </h6>
            </a>
            <div class='small text-gray-500'>
              by{' '}
              <a class='text-gray-500' href='#!'>
                {name}
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div class='col-lg-5 col-xl-4'>
        <div class='card'>
          <div class='card-body'>
            <h6 style={{ fontSize: '1.3rem' }}>리뷰</h6>
            (평점 4.8, 리뷰수 22)
            <hr />
            {this.renderReviews()}
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewSideCard;
