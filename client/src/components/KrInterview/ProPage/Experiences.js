import React, { Component } from 'react';
import ReviewSideCard from './ReviewSideCard';

class Experiences extends Component {
  renderExperiences() {
    const { experiences } = this.props;

    return experiences.map(({ companyName, department, job, dates }, index) => {
      return (
        <div key={index}>
          <div className="media">
            <div className="media-body">
              <div className="text-dark">
                <h5 className="mt-0">{companyName}</h5>
              </div>
              <p>{`${department} | ${job}`}</p>
              <p>{dates}</p>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      );
    });
  }

  render() {
    const { reviews, reviewScore, numberOfReviews } = this.props;
    return (
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="mb-0">경력사항</h6>
        </div>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-lg-7 col-xl-8">{this.renderExperiences()}</div>
          <ReviewSideCard
            reviews={reviews}
            reviewScore={reviewScore}
            numberOfReviews={numberOfReviews}
          />
        </div>
      </div>
    );
  }
}

export default Experiences;
