import React from 'react';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

const ReviewBoard = ({ reviewScore, numberOfReviews }) => {
  if (reviewScore >= 4.5) {
    return (
      <div>
        <div
          style={{ color: '#ffce03', fontSize: '1.5rem' }}
          className="mb-2 text-left d-inline"
        >
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStarHalf />
        </div>
        <div className="mb-3">{`평점 ${reviewScore}, 리뷰수 ${numberOfReviews}`}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{ color: '#ffce03', fontSize: '1.5rem' }}
          className="mb-2 text-left d-inline"
        >
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStarOutline />
        </div>
        <div className="mb-3">{`평점 ${reviewScore}, 리뷰수 ${numberOfReviews}`}</div>
      </div>
    );
  }
};

export default ReviewBoard;
