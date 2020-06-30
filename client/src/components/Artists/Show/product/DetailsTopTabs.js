import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import StarRatings from 'react-star-ratings';

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
                <p className='mt-4 p-0'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </TabPanel>
              <TabPanel>
                <p className='mt-4 p-0'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </TabPanel>
              <TabPanel>
                <form className='theme-form mt-4'>
                  <div className='form-row'>
                    <div className='col-md-12 mb-4'>
                      <div className='d-block'>평점</div>
                      <div className='media m-0'>
                        <div className='d-block'>
                          <StarRatings
                            rating={this.state.rating}
                            starRatedColor='#d8a6a2'
                            starHoverColor='#d8a6a2'
                            starDimension='1.5rem'
                            starSpacing='3px'
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='name'>
                        이메일주소(이메일주소는 공개되지 않습니다.)
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='email'
                        placeholder='이메일주소를 입력해주세요.'
                        required
                      />
                    </div>
                    <div className='col-md-12'>
                      <label htmlFor='review'>제품리뷰</label>
                      <textarea
                        className='form-control'
                        placeholder='리뷰를 작성해주세요!'
                        id='exampleFormControlTextarea1'
                        rows='6'
                      ></textarea>
                    </div>
                    <div className='col-md-12'>
                      <button className='btn btn-solid' type='submit'>
                        제출하기
                      </button>
                    </div>
                  </div>
                </form>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailsTopTabs;
