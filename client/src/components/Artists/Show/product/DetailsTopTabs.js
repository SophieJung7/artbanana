import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

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
    const { artistId, profileImg, reviews } = this.props;
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
                <table className='table table-striped mb-0'>
                  <tbody>
                    <tr>
                      <th>작품소재 :</th>
                      <td>연필</td>
                    </tr>
                    <tr>
                      <th>배송비 :</th>
                      <td>무료</td>
                    </tr>
                    <tr>
                      <th>작품제작기간 :</th>
                      <td>
                        평일기준 10일(작가가 손으로 직접 정성을 다해 그리기
                        때문에 최대 2주가 걸립니다.)
                      </td>
                    </tr>
                    <tr>
                      <th>사진선택 :</th>
                      <td>
                        어떤 사진을 의뢰할지 고민이 되신다면 제품 구매후, 작가와
                        함께 결정하실 수 있습니다.
                      </td>
                    </tr>
                    <tr>
                      <th>작품사이즈 :</th>
                      <td>
                        제출하시는 사진사이즈와 관계없이 구매시 선택하신
                        사이즈로 아티스트가 제작해 드립니다.
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
                        작품에 액자는 포함되어 있지 않습니다. 액자로 제작해서
                        배송되길 원하신다면 문의 부탁드립니다.
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
                  <div className='col-10'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                  </div>
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
