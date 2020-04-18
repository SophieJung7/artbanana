import React, { Component } from 'react';

class Education extends Component {
  renderEducation() {
    const { educations } = this.props;
    return educations.map(({ schoolName, major, dates }, index) => {
      return (
        <div key={index}>
          <div className="media">
            <div className="media-body">
              <div className="text-dark">
                <h5 className="mt-0">{schoolName}</h5>
              </div>
              <p>{major}</p>
              <p>{dates}</p>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="mb-0">학력사항</h6>
        </div>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-lg-7 col-xl-8">{this.renderEducation()}</div>
        </div>
      </div>
    );
  }
}

export default Education;
