import React from 'react';
import reviewer from '../../../assets/photos/reviewer.jpg';
import mang from '../../../assets/photos/mang.jpg';

const Review = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="title1">
            <h4 className="mt-5">Review</h4>
            <h2 className="title-inner1 interviewon-review">
              인터뷰온 합격후기
            </h2>
            <hr />
          </div>
        </div>
      </div>
      <div className="row mb-10">
        <div className="col-lg-6 divider-right">
          <div className="testimonial p-5 mb-3" style={{ height: '60vh' }}>
            <div className="avatar avatar-xl mb-3">
              <img
                className="avatar-img rounded-circle mb-3"
                src={reviewer}
                alt="reviewer-landing-1"
              />
              <p className="testimonial-quote text-dark">
                "어느 순간, '난 어딜가나 합격하겠구나' 라는 생각이 들었습니다."
              </p>
            </div>
            <div className="testimonial-name">김지현님</div>
            <div className="testimonial-position">루이비통코리아 입사</div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="testimonial p-5" style={{ height: '60vh' }}>
            <div className="avatar avatar-xl mb-3">
              <img
                className="avatar-img rounded-circle"
                src={mang}
                alt="reviewer-landing-2"
              />
            </div>
            <p className="testimonial-quote text-dark">
              "취업이 이렇게 쉽게 되는건지 몰랐어요!"
            </p>
            <div className="testimonial-name">정명수님</div>
            <div className="testimonial-position">삼성물산 입사</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
