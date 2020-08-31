import React, { Component } from 'react';
import SidebarWrapper from '../../sidebar/SidebarWrapper';
import TabsetProfile from './TabsetProfile';

export class Profile extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <SidebarWrapper
        artistId={this.props.match.params.id}
        breadTitle='프로필수정하기'
        breadParent='아티스트페이지'
      >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-4'>
              <div className='card'>
                <div className='card-body'>
                  <div className='profile-details text-center'>
                    <img
                      src='https://artbanana.s3.ap-northeast-2.amazonaws.com/website/designer.jpg'
                      alt=''
                      className='img-fluid img-90 rounded-circle blur-up lazyloaded'
                    />
                    <h5 className='f-w-600 f-16 mb-0'>John deo</h5>
                    <span>johndeo@gmail.com</span>
                    <div className='social'>
                      <div className='form-group btn-showcase'>
                        <button className='btn social-btn btn-fb d-inline-block'>
                          {' '}
                          <i className='fa fa-facebook'></i>
                        </button>
                        <button className='btn social-btn btn-twitter d-inline-block'>
                          <i className='fa fa-google'></i>
                        </button>
                        <button className='btn social-btn btn-google d-inline-block mr-0'>
                          <i className='fa fa-twitter'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='project-status'>
                    <h5 className='f-w-600 f-16'>Employee Status</h5>
                    <div className='media'>
                      <div className='media-body'>
                        <h6>
                          Performance <span className='pull-right'>80%</span>
                        </h6>
                        <div className='progress sm-progress-bar'>
                          <div
                            className='progress-bar bg-primary'
                            role='progressbar'
                            style={{ width: '90%' }}
                            aria-valuenow='25'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className='media'>
                      <div className='media-body'>
                        <h6>
                          Overtime <span className='pull-right'>60%</span>
                        </h6>
                        <div className='progress sm-progress-bar'>
                          <div
                            className='progress-bar bg-secondary'
                            role='progressbar'
                            style={{ width: '60%' }}
                            aria-valuenow='25'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className='media'>
                      <div className='media-body'>
                        <h6>
                          Leaves taken <span className='pull-right'>50%</span>
                        </h6>
                        <div className='progress sm-progress-bar'>
                          <div
                            className='progress-bar bg-danger'
                            role='progressbar'
                            style={{ width: '50%' }}
                            aria-valuenow='25'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-8'>
              <div className='card profile-card'>
                <div className='card-body'>
                  <TabsetProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarWrapper>
    );
  }
}

export default Profile;
