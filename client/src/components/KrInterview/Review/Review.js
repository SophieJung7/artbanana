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
                "저는 스펙이 부족해서 대기업들은 대부분 서류전형에서 떨어졌어요.
                그래서 외국계기업을 노리기로 했고 인터뷰온을 통해 서류전형,
                면접준비를 했습니다. 확실히 실무에서 일해보신 전문가들에게
                컨설팅을 받으니 어떻게해야 붙겠다는 감이 잡히기 시작했어요.
                이제는 어떤 면접도 자신있다고 말할 수 있을 것 같습니다. 취업이
                불안하시고 도와줄 사람들이 주위에 없다면 꼭 이용해보시기
                바랍니다!"
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
              "저는 앞이 막막했어요. 미래에 대한 진지한 고민없이 그냥 붙는데
              들어가자는 마인드였습니다. 그런데 인터뷰온 전문가님들에게
              컨설팅받으면서 미래에 대한 비전이 생겼습니다. 그러니깐 서류도 쉽게
              붙게되고, 면접도 쉽게 통과했던 것 같습니다. 지금 정말 힘드시다면
              전문가를 찾는게 중요할 것 같습니다. 지금은 철저하게 준비하지
              않으면 절대 취업에 성공할 수 없습니다."
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
