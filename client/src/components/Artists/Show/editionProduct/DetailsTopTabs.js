import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import Reviews from '../ProductCommon/Reviews';
import ReviewForm from '../ProductCommon/ReviewForm';

class DetailsTopTabs extends Component {
  state = {
    rating: 4,
  };

  changeRating = (newRating) => {
    this.setState(
      {
        rating: newRating,
      },
      () => console.log(this.state.rating)
    );
  };

  render() {
    const { intro, artistId, profileImg, reviews, quantity } = this.props;
    return (
      <section className='tab-product m-0 mb-5'>
        <div className='row'>
          <div className='col-sm-12 col-lg-12'>
            <Tabs className='tab-content nav-material'>
              <TabList className='nav nav-tabs nav-material'>
                <Tab className='nav-item'>
                  <span className='nav-link active'>작품정보</span>
                  <div className='material-border'></div>
                </Tab>
                <Tab className='nav-item'>
                  <span className='nav-link'>아티스트소개</span>
                  <div className='material-border'></div>
                </Tab>
                <Tab className='nav-item'>
                  <span className='nav-link'>작품리뷰</span>
                  <div className='material-border'></div>
                </Tab>
                <Tab className='nav-item'>
                  <span className='nav-link'>리뷰작성</span>
                  <div className='material-border'></div>
                </Tab>
              </TabList>
              <TabPanel className='tab-pane fade mt-4 show active'>
                <table
                  className='table table-striped mb-0'
                  style={{ fontSize: '0.9rem' }}
                >
                  <tbody>
                    <tr>
                      <th>작품소재 :</th>
                      <td>유화</td>
                    </tr>
                    <tr>
                      <th>에디션소개 :</th>
                      <td>
                        유화를 특수프린트하여 정밀도와 세밀도면에서 원본과
                        다름없는 작품입니다.
                      </td>
                    </tr>
                    <tr>
                      <th>에디션수량 :</th>
                      <td>
                        {quantity}개 / 에디션은 아티스트가 정한 한정수량만을
                        제작해 에디션의 가치를 높입니다.
                      </td>
                    </tr>
                    <tr>
                      <th>배송비 :</th>
                      <td>무료</td>
                    </tr>
                    <tr>
                      <th>작품제작기간 :</th>
                      <td>
                        평일기준 10일 / 아티스트가 주문 후 직접 제작하기 때문에
                        시간이 걸립니다.
                      </td>
                    </tr>
                    <tr>
                      <th>작품사이즈 :</th>
                      <td>
                        동 사이즈가 아닌 다른 사이즈로 제작을 원하신다면
                        고객센터로 연락 부탁드립니다.
                      </td>
                    </tr>
                    <tr>
                      <th>환불 :</th>
                      <td>
                        작품이 마음에 들지 않으시다면 100% 환불해 드립니다.
                      </td>
                    </tr>
                    <tr>
                      <th>액자 :</th>
                      <td>
                        아트바나나의 모든 에디션제품들은 캔버스형태로 제작되어
                        바로 벽에 거실 수 있습니다. <br />
                        인테리어효과를 위해 액자를 원하신다면 개별적으로 주문
                        부탁드립니다.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                {/* <p className='mt-4 p-0'>
                 
                </p> */}
                <div className='row d-flex align-items-center mt-4 p-0'>
                  <div className='col-2'>
                    <img
                      className='avatar-img rounded-circle'
                      src={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${profileImg}`}
                      style={{ width: '6rem', height: '6rem' }}
                      alt='profile'
                    />
                  </div>
                  <div className='col-10'>{intro}</div>
                </div>
              </TabPanel>
              <TabPanel>
                {/* Show REVIEWS */}
                <Reviews reviews={reviews} />
              </TabPanel>
              <TabPanel>
                {/* REVIEW FORM */}
                <ReviewForm artistId={artistId} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailsTopTabs;
