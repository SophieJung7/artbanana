import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import { submitReview } from '../../../actions';

class ReviewForm extends Component {
  state = {
    email: '',
    score: 5,
    review: '',
    error: '',
  };

  changeRating = (newScore) => {
    this.setState({
      score: newScore,
    });
  };

  handleValidation = () => {
    let formIsValid = true;
    if (!this.state.email) {
      formIsValid = false;
      this.setState({ error: '이메일을 입력해주세요.' });
    }
    return formIsValid;
  };

  onReviewSubmit = (event) => {
    event.preventDefault();
    if (this.handleValidation()) {
      const artistId = this.props.artistId;
      this.props.submitReview(artistId, {
        email: this.state.email,
        score: this.state.score,
        review: this.state.review,
      });
      alert('리뷰가 제출되었습니다!');
      window.location.reload();
    } else {
      alert('이메일을 입력해주세요.');
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onReviewSubmit} className='theme-form mt-4'>
          <div className='form-row'>
            <div className='col-md-12 mb-4'>
              <div className='d-block'>평점</div>
              <div className='media m-0'>
                <div className='d-block'>
                  <StarRatings
                    rating={this.state.score}
                    starRatedColor='#d8a6a2'
                    starHoverColor='#d8a6a2'
                    starDimension='1.5rem'
                    starSpacing='3px'
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                  />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <label htmlFor='name'>
                이메일주소(이메일주소는 공개되지 않습니다.)
              </label>
              <input
                type='text'
                className='form-control'
                id='email'
                placeholder='이메일주소를 입력해주세요.'
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
              />
            </div>
            <div className='col-md-12'>
              <label htmlFor='review'>제품리뷰</label>
              <textarea
                className='form-control'
                placeholder='리뷰를 작성해주세요!'
                id='exampleFormControlTextarea1'
                rows='6'
                onChange={(event) =>
                  this.setState({ review: event.target.value })
                }
              ></textarea>
            </div>
            <div className='col-md-12'>
              <button className='btn btn-solid' type='submit'>
                제출하기
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { submitReview })(ReviewForm);
