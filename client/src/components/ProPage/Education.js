import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div>
        <div class='d-flex align-items-center justify-content-between'>
          <h6 class='mb-0'>학력사항</h6>
        </div>
        <hr class='mb-4' />
        <div class='row'>
          <div class='col-lg-7 col-xl-8'>
            <div class='media'>
              <div class='media-body'>
                <a class='text-dark' href='#!'>
                  <h5 class='mt-0'>Stanford University</h5>
                </a>
                <p>Computer Science 101 Online Course</p>
                <p>2018년</p>
              </div>
            </div>
            <hr class='my-4' />
            <div class='media'>
              <div class='media-body'>
                <a class='text-dark' href='#!'>
                  <h5 class='mt-0'>동국대학교</h5>
                </a>
                <p>영어통번역학/ 국제통상학</p>
                <p>2013년 - 2019년</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
