import React, { Component } from 'react';
import Experiences from './Experiences';
import Skills from './Skills';
import Education from './Education';

class Resume extends Component {
  render() {
    const {
      experiences,
      educations,
      skills,
      reviews,
      reviewScore,
      numberOfReviews,
    } = this.props;
    return (
      <div>
        <Experiences
          experiences={experiences}
          reviews={reviews}
          reviewScore={reviewScore}
          numberOfReviews={numberOfReviews}
        />
        <Education educations={educations} />
        <Skills skills={skills} reviews={reviews} />
      </div>
    );
  }
}

export default Resume;
