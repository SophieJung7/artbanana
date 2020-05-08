import React, { Component } from 'react';
import ReviewSideCardMobile from './ReviewSideCardMobile';

class Skills extends Component {
  renderSkills() {
    const { skills } = this.props;
    return skills.map((skill, index) => {
      return (
        <div key={index}>
          <div className="media">
            <div className="media-body">
              <div className="text-dark">
                <h5 className="mt-0">{skill}</h5>
              </div>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      );
    });
  }

  render() {
    const { reviews } = this.props;
    return (
      <div className="mt-5">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="mb-0">기타</h6>
        </div>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-lg-7 col-xl-8">{this.renderSkills()}</div>
          <ReviewSideCardMobile reviews={reviews} />
        </div>
      </div>
    );
  }
}

export default Skills;
