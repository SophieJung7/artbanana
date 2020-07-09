import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { FaUser, FaAngleDoubleRight } from 'react-icons/fa';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfReviews: 0,
      showingNumberOfReviews: 0,
      reviewsShowing: [],
      avgScore: 5,
    };
  }

  componentDidMount() {
    const numberOfReviews = this.props.reviews.length;
    this.setState({ numberOfReviews: numberOfReviews }, () => {
      if (this.state.numberOfReviews) {
        this.increaseReviews();
        this.calAvgScore();
      }
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.reviews !== this.props.reviews) {
      const numberOfReviews = this.props.reviews.length;
      this.setState({ numberOfReviews: numberOfReviews }, () => {
        if (this.state.numberOfReviews) {
          this.increaseReviews();
          this.calAvgScore();
        }
      });
    }
  }

  calAvgScore = () => {
    const { reviews } = this.props;
    let totalScores = 0;
    // Sum all the scores of reviews
    reviews.map(({ score }) => {
      totalScores += score;
    });
    const numberOfReviews = reviews.length;
    const avgS = totalScores / numberOfReviews;
    const avgScore = avgS.toFixed(2);
    this.setState({ avgScore: avgScore });
  };

  hideUserEmail = function (email) {
    let characterArray = email.split('');
    let lengthArray = characterArray.length;
    for (let i = 3; i < lengthArray; i++) {
      characterArray[i] = '*';
    }
    let hiddenEmail = characterArray.join('');
    return hiddenEmail;
  };

  increaseReviews = () => {
    const { reviews } = this.props;
    let reviewsShowing = [];

    const calShowingNumber = () => {
      if (this.state.numberOfReviews < this.state.showingNumberOfReviews + 3) {
        return this.state.numberOfReviews;
      }
      return this.state.showingNumberOfReviews + 3;
    };

    const showingNumberOfReviews = calShowingNumber();

    for (var i = 0; i < showingNumberOfReviews; i++) {
      reviewsShowing.push(
        <div key={i} className='d-flex align-items-center mb-4'>
          <div className='avatar avatar-lg'>
            <FaUser
              className='avatar-img'
              style={{
                height: '5em',
                width: '5em',
                backgroundColor: '#f8f9fa',
                padding: '1.2rem',
              }}
            />
          </div>
          <div className='ml-3'>
            <div className='mb-2 text-left d-inline'>
              <StarRatings
                rating={reviews[i].score}
                starRatedColor='#d8a6a2'
                starHoverColor='#d8a6a2'
                starDimension='1.2rem'
                starSpacing='1px'
                numberOfStars={5}
                name='rating'
              />
            </div>
            <div className='text-dark'>
              <h6 className='mb-1' style={{ fontSize: '0.9rem' }}>
                {reviews[i].review}
              </h6>
            </div>
            <div className='small text-gray-500'>
              by{' '}
              <div className='d-inline text-gray-500'>
                {this.hideUserEmail(reviews[i].email)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    this.setState({ showingNumberOfReviews: showingNumberOfReviews });
    this.setState({ reviewsShowing: reviewsShowing });
  };

  render() {
    const { reviews } = this.props;
    if (this.state.numberOfReviews) {
      return (
        <div className=''>
          <div className='card'>
            <div className='card-body'>
              <h6 className='customer-review' style={{ fontSize: '1.3rem' }}>
                리뷰
              </h6>
              {`평점 ${this.state.avgScore}, 리뷰수 ${reviews.length}개`}
              <hr />
              {this.state.reviewsShowing}
              <button
                onClick={() => this.increaseReviews()}
                style={{ border: 'none', backgroundColor: 'transparent' }}
              >
                리뷰 더 보기{' '}
                <FaAngleDoubleRight
                  style={{ height: '1.1em', width: '1.1em' }}
                />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <p className='mt-5 p-0'>리뷰가 없습니다.</p>;
    }
  }
}

export default Reviews;
