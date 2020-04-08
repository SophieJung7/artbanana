import React from 'react';
import reviewer from '../../assets/photos/reviewer.jpg';
import mang from '../../assets/photos/mang.jpg';

const Review = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='title1'>
            <h4>Review</h4>
            <h2 className='title-inner1'>인터뷰온 합격후기</h2>
            <hr role='tournament6' />
          </div>
        </div>
      </div>
      <div className='row mb-10'>
        <div className='col-lg-6 mb-5 mb-lg-0 divider-right'>
          <div className='testimonial p-lg-5' style={{ height: '42vh' }}>
            <div className='avatar avatar-xl mb-3'>
              <img className='avatar-img rounded-circle' src={reviewer} />
            </div>
            <p className='testimonial-quote text-dark'>
              "영어는 거의 기초 문법정도만 알던 수준이었는데 이렇게 빨리 실력이
              늘꺼라곤 상상도 못했어요. 스터디도 많이 하긴 했었는데 확실히
              선생님께서 원어민 수준이시고 실무도 해보신 분이라 피드백이
              구체적인 것 같애요. 인터뷰온에서 중국어랑 일본어도 하면 진짜 좋을
              것 같아요..."
            </p>
            <div className='testimonial-name'>김지현님</div>
            <div className='testimonial-position'>루이비통코리아 입사</div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='testimonial p-lg-5' style={{ height: '42vh' }}>
            <div className='avatar avatar-xl mb-3'>
              <img className='avatar-img rounded-circle' src={mang} />
            </div>
            <p className='testimonial-quote text-dark'>
              "저는 영어를 전공했습니다. 근데도 외국인이 길 물어보면 솔직히
              한마디도 제대로 못했었어요. 그래서 영어면접 준비가 절실했어요. 넌
              대체 4년동안 뭘배웠니라고 물어보면 할 말이 없었기 때문이죠.
              그래서인지 인터뷰온 한달간 일주일에 한번씩 과외받으면서 외국인과
              말하고 있는 제 자신이 정말 신기했어요..."
            </p>
            <div className='testimonial-name'>정명수님</div>
            <div className='testimonial-position'>삼성물산 입사</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
