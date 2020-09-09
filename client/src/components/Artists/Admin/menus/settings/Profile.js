import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import { editArtist } from '../../../../../actions';
import SidebarWrapper from '../../sidebar/SidebarWrapper';
import TabsetProfile from './TabsetProfile';

export class Profile extends Component {
  state = {
    loading: false,
    profileImg: {},
    profileImgBlob:
      'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png',
    profileFile: null,
    homepage: null,
    insta: null,
    etc: null,
    portfolioImgBlobs: [],
    portfolioImgFiles: [],
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.artist !== this.props.artist) {
      // Set Profle Img
      this.setState({
        profileImgBlob: `https://artbanana.s3.ap-northeast-2.amazonaws.com/${this.props.artist.profileImg}`,
      });
      //   Set SNS Info
      if (this.props.artist.SNS) {
        const { SNS } = this.props.artist;
        if (SNS.homepage) {
          this.setState({ homepage: SNS.homepage });
        }
        if (SNS.insta) {
          this.setState({ insta: SNS.insta });
        }
        if (SNS.homepage) {
          this.setState({ etc: SNS.etc });
        }
      }
      //   Set Portfolio Imgs
      const portfolioImgs = this.props.artist.portfolioImgs;
      const portfolioImgBlobs = portfolioImgs.map((img) => {
        return `https://artbanana.s3.ap-northeast-2.amazonaws.com/${img.key}`;
      });
      this.setState({ portfolioImgFiles: portfolioImgs });
      this.setState({ portfolioImgBlobs: portfolioImgBlobs });
    }
  }

  onSubmit = async (formValues) => {
    //   When you click 수정하기 on TabsetProfile ==> Meaning text contents changed.
    if (formValues) {
      try {
        // Show PacmanLoader
        this.setState({ loading: true });
        const artistId = this.props.match.params.id;
        const profilePhoto = this.state.profileFile;
        const portfolioImgs = this.state.portfolioImgFiles;
        const totalValues = { ...formValues, portfolioImgs };
        await this.props.editArtist(artistId, totalValues, profilePhoto);
        window.location.reload(false);
      } catch (err) {
        this.setState({ loading: false });
        console.log(err);
      }
    } else {
      //   When you click '포트폴리오 수정완료' here ==> Meaning only portfolioImgs changed.
      try {
        // Show PacmanLoader
        this.setState({ loading: true });
        const artistId = this.props.match.params.id;
        const portfolioImgs = this.state.portfolioImgFiles;
        await this.props.editArtist(artistId, { portfolioImgs });
        window.location.reload(false);
      } catch (err) {
        this.setState({ loading: false });
        console.log(err);
      }
    }
  };

  handleProfileImgChange = (e) => {
    try {
      const profileFile = e.target.files[0];
      const profileImgBlob = URL.createObjectURL(profileFile, {
        oneTimeOnly: true,
      });
      this.setState({ profileFile, profileImgBlob });
    } catch (e) {
      console.log(e);
    }
  };

  handlePortfolioImgChange = (e, i) => {
    try {
      //   State Update For Uploaded Files
      let portfolioImgFiles = [...this.state.portfolioImgFiles];
      portfolioImgFiles[i] = e.target.files[0];
      // Make File Blob for showing the Img on the screen and change the dummyImg
      const file = e.target.files[0];
      const fileBlob = URL.createObjectURL(file, { oneTimeOnly: true });
      let portfolioImgBlobs = this.state.portfolioImgBlobs;
      portfolioImgBlobs[i] = fileBlob;
      this.setState({ portfolioImgFiles, portfolioImgBlobs });
    } catch (error) {
      return null;
    }
  };

  renderPortfolio() {
    //   To Show Dummy Imgs for product Imgs
    return this.state.portfolioImgBlobs.map((img, i) => {
      return (
        <div key={i} className='isotopeSelector fashion'>
          <div className='overlay'>
            <div className='border-portfolio'>
              <label htmlFor='portfolio'>
                <img src={img} alt='portfolio-blob' />
              </label>
              <input
                className='upload'
                type='file'
                id='portfolio'
                onChange={(e) => this.handlePortfolioImgChange(e, i)}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { name, email } = this.props.artist;
    return (
      <SidebarWrapper
        artistId={this.props.match.params.id}
        breadTitle='프로필 수정하기'
        breadParent='아티스트페이지'
      >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-4'>
              <div className='card'>
                <div className='card-body'>
                  <div className='profile-details text-center'>
                    <div className='box-input-file'>
                      <label htmlFor='image'>
                        <img
                          src={this.state.profileImgBlob}
                          alt='profile'
                          className='img-fluid img-90 rounded-circle blur-up lazyloaded'
                        />
                      </label>
                      <input
                        className='upload'
                        type='file'
                        id='image'
                        onChange={this.handleProfileImgChange}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <h5 className='f-w-600 f-16 mb-0'>{name}</h5>
                    <span>{email}</span>
                  </div>
                  <hr />
                  <div className='project-status'>
                    <h5 className='f-w-600 f-16'>SNS정보</h5>
                    <div className='media'>
                      <div className='media-body'>
                        <h6>홈페이지주소</h6>
                        {this.state.homepage || '없음'}
                      </div>
                    </div>
                    <div className='media'>
                      <div className='media-body'>
                        <h6>인스타그램</h6>
                        {this.state.insta || '없음'}
                      </div>
                    </div>
                    <div className='media'>
                      <div className='media-body'>
                        <h6>기타SNS주소</h6>
                        {this.state.etc || '없음'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-8'>
              <div className='card profile-card'>
                <div className='card-body'>
                  {name || email ? (
                    <TabsetProfile
                      onSubmit={this.onSubmit}
                      loading={this.state.loading}
                      initialValues={this.props.artist}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* EDIT PORTFOLIO */}
          <div className='row'>
            <div className='col'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='f-w-600 f-16'>포트폴리오 수정</h5>
                  <section className='portfolio-section portfolio-padding pt-0 port-col zoom-gallery'>
                    <div className='container mt-5'>
                      <div className='isotopeContainer row'>
                        <Masonry
                          breakpointCols='4'
                          className='my-masonry-grid'
                          columnClassName='my-masonry-grid_column'
                        >
                          {/* SHOW portfolio imgs */}
                          {this.renderPortfolio()}
                        </Masonry>
                      </div>
                      <div className='d-flex justify-content-center mb-5'>
                        <button
                          onClick={() => this.onSubmit(null)}
                          className='btn btn-solid btn-review px-5'
                        >
                          포트폴리오 수정완료
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarWrapper>
    );
  }
}
// const selector = formValueSelector('artistForm');

// const mapStateToProps = (state) => {
//   return {
//     artist: state.artist,
//     TabsetProfileValues: selector(state, 'name'),
//   };
// };

const mapStateToProps = (state) => {
  return { artist: state.artist };
};
export default connect(mapStateToProps, { editArtist })(Profile);
