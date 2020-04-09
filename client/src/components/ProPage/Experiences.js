import React, { Component } from 'react';
import ReviewSideCard from './ReviewSideCard';

class Experiences extends Component {
  render() {
    return (
      <div>
        <div class='d-flex align-items-center justify-content-between'>
          <h6 class='mb-0'>경력사항</h6>
        </div>
        <hr class='mb-4' />
        <div class='row'>
          <div class='col-lg-7 col-xl-8'>
            <div class='media'>
              <div class='media-body'>
                <a class='text-dark' href='#!'>
                  <h5 class='mt-0'>대한무역투자진흥공사(KOTRA) 런던지사</h5>
                </a>
                <p>지사화사업팀 | 해외영업 및 마케팅</p>
                <p>2016년 9월 - 2018년 10월</p>
              </div>
            </div>
            <hr class='my-4' />
            <div class='media'>
              <div class='media-body'>
                <a class='text-dark' href='#!'>
                  <h5 class='mt-0'>대한무역투자진흥공사(KOTRA) 런던지사</h5>
                </a>
                <p>지사화사업팀 | 해외영업 및 마케팅</p>
                <p>2016년 9월 - 2018년 10월</p>
              </div>
            </div>
            <hr class='my-4' />
            <div class='media'>
              <div class='media-body'>
                <a class='text-dark' href='#!'>
                  <h5 class='mt-0'>대한무역투자진흥공사(KOTRA) 런던지사</h5>
                </a>
                <p>지사화사업팀 | 해외영업 및 마케팅</p>
                <p>2016년 9월 - 2018년 10월</p>
              </div>
            </div>
            <hr class='my-4' />
            <div class='media'>
              <div class='media-body'>
                <a class='text-dark' href='#!'>
                  <h5 class='mt-0'>대한무역투자진흥공사(KOTRA) 런던지사</h5>
                </a>
                <p>지사화사업팀 | 해외영업 및 마케팅</p>
                <p>2016년 9월 - 2018년 10월</p>
              </div>
            </div>
          </div>
          <ReviewSideCard />
        </div>
      </div>
    );
  }
}

export default Experiences;
