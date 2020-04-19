import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { FaUserNinja, FaAngleDoubleRight } from 'react-icons/fa';

class ReviewSideCard extends Component {
  state = {
    numberOfReviews: 3,
    reviewsShowing: [],
  };

  componentDidMount() {
    this.increaseReviews();
  }

  increaseReviews = () => {
    const { reviews } = this.props;
    let reviewsShowing = [];
    let numberOfReviews = this.state.numberOfReviews + 3;
    this.setState(() => {
      return { numberOfReviews: numberOfReviews };
    });
    for (var i = 0; i < this.state.numberOfReviews; i++) {
      if (reviews[i] && reviews[i].reviewScore === 5) {
        reviewsShowing.push(
          <div key={i} className="d-flex align-items-center mb-4">
            <div className="avatar avatar-lg">
              <FaUserNinja
                className="avatar-img"
                style={{
                  height: '5em',
                  width: '5em',
                  backgroundColor: '#f8f9fa',
                  padding: '1.2rem',
                }}
              />
            </div>
            <div className="ml-3">
              <div
                style={{ color: '#ffce03', fontSize: '1.2rem' }}
                className="mb-2 text-left d-inline"
              >
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <div className="text-dark">
                <h6 className="mb-1" style={{ fontSize: '0.9rem' }}>
                  {reviews[i].review}
                </h6>
              </div>
              <div className="small text-gray-500">
                by{' '}
                <div className="d-inline text-gray-500">{reviews[i].name}</div>
              </div>
            </div>
          </div>
        );
      }
      if (reviews[i] && reviews[i].reviewScore === 4) {
        reviewsShowing.push(
          <div key={i} className="d-flex align-items-center mb-4">
            <div className="avatar avatar-lg">
              <FaUserNinja
                className="avatar-img"
                style={{
                  height: '5em',
                  width: '5em',
                  backgroundColor: '#f8f9fa',
                  padding: '1.2rem',
                }}
              />
            </div>
            <div className="ml-3">
              <div
                style={{ color: '#ffce03', fontSize: '1.2rem' }}
                className="mb-2 text-left d-inline"
              >
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
              </div>
              <div className="text-dark">
                <h6 className="mb-1" style={{ fontSize: '0.9rem' }}>
                  {reviews[i].review}
                </h6>
              </div>
              <div className="small text-gray-500">
                by{' '}
                <div className="d-inline text-gray-500">{reviews[i].name}</div>
              </div>
            </div>
          </div>
        );
      }
    }
    this.setState({ reviewsShowing: reviewsShowing });
  };

  render() {
    const { reviewScore, numberOfReviews } = this.props;
    return (
      <div className="col-lg-5 col-xl-4 d-none d-sm-block">
        <div className="card">
          <div className="card-body">
            <h6 className="customer-review" style={{ fontSize: '1.3rem' }}>
              리뷰
            </h6>
            {`평점 ${reviewScore}, 리뷰수 ${numberOfReviews}`}
            <hr />
            {this.state.reviewsShowing}
            <button onClick={this.increaseReviews} style={{ border: 'none' }}>
              리뷰 더 보기{' '}
              <FaAngleDoubleRight style={{ height: '1.1em', width: '1.1em' }} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewSideCard;
