import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div class='mt-5'>
        <div class='d-flex align-items-center justify-content-between'>
          <h6 class='mb-0'>기타</h6>
        </div>
        <hr class='mb-4' />
        <div class='row'>
          <div class='col-lg-7 col-xl-8'>
            <div class='media'>
              <div class='media-body'>
                <a class='text-dark' href='#!'>
                  <h5 class='mt-0'>TOEIC 980점</h5>
                </a>
              </div>
            </div>
            <hr class='my-4' />
            <div class='media'>
              <div class='media-body'>
                <a class='text-dark' href='#!'>
                  <h5 class='mt-0'>OPIc 최고등급(AL)</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
