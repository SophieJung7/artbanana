import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import _ from 'lodash';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { AiOutlineClose } from 'react-icons/ai';
import * as actions from '../../../actions';
import FIELDS from './RegisterFields';

class RegisterFormReview extends Component {
  state = {
    loading: false,
    error: false,
    //   Profile Img: Blob is for showing on screen, file is for uploading data.
    profileImg: {},
    profileImgBlob: '',
    profileFile: null,
    portfolioImgs: [],
    portfolioImgBlobs: [],
    portfolioFiles: null,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  //*********** Submit the form ***********
  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.profileFile && this.state.portfolioFiles) {
      this.setState({ loading: true });
      const { createArtist, formValues } = this.props;
      createArtist(
        formValues,
        this.state.profileFile,
        this.state.portfolioFiles
      );
    } else {
      this.setState({ error: true });
      this.setState({ loading: false });
    }
  };

  onProfileImgChange = (event) => {
    this.setState({ profileFile: event.target.files[0] });
    const file = event.target.files[0];
    const fileBlob = URL.createObjectURL(file, { oneTimeOnly: true });
    this.setState({ profileImg: file, profileImgBlob: fileBlob });
  };

  onPortfolioImgsChange = (event) => {
    this.setState({ portfolioFiles: event.target.files });
    const files = [...this.state.portfolioImgs, ...event.target.files];
    const fileBlobs = [];
    for (var i = 0; i < files.length; i++) {
      let fileBlob = URL.createObjectURL(files[i], { oneTimeOnly: true });
      fileBlobs.push({
        path: fileBlob,
        name: files[i].name,
      });
    }
    this.setState({ portfolioImgs: files, portfolioImgBlobs: fileBlobs });
  };

  showPortfolioImgs = () => {
    if (this.state.portfolioImgBlobs) {
      return this.state.portfolioImgBlobs.map(({ path }, index) => {
        return (
          <div key={path} className='isotopeSelector fashion'>
            <div className='overlay'>
              <div className='border-portfolio'>
                <div className='overlay-background d-flex justify-content-center align-items-center'>
                  <button
                    onClick={() => this.onRemovePortfolioImg(index)}
                    type='button'
                    className='btn btn-dark'
                    aria-hidden='true'
                  >
                    <AiOutlineClose
                      style={{ fontSize: '1.5rem' }}
                      aria-hidden='true'
                    />
                  </button>
                </div>
                <img src={path} alt='portfolio-blob' />
              </div>
            </div>
          </div>
        );
      });
    }
    return null;
  };

  onRemovePortfolioImg = (index) => {
    const portfolioImgs = [...this.state.portfolioImgs];
    const portfolioImgBlobs = [...this.state.portfolioImgBlobs];
    const portfolioFiles = [...this.state.portfolioFiles];

    portfolioImgs.splice(index, 1);
    portfolioImgBlobs.splice(index, 1);
    portfolioFiles.splice(index, 1);

    this.setState({ portfolioImgs: portfolioImgs });
    this.setState({ portfolioImgBlobs: portfolioImgBlobs });
    this.setState({ portfolioFiles: portfolioFiles });
  };

  render() {
    const { formValues } = this.props;

    const reviewFields = _.map(FIELDS, ({ name, label }) => {
      return (
        <div key={name} className='form-row'>
          <div className='col-md-12'>
            <label>{label}</label>
            <p>{formValues[name]}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h3 className='mt-5 text-center'>아트바나나 아티스트 등록하기</h3>
        <p className='text-center' style={{ fontSize: '1.1rem' }}>
          작성한 내용을 확인해주세요.
        </p>
        <section className='contact-page section-b-space'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <form onSubmit={this.onFormSubmit} className='theme-form'>
                  {reviewFields}
                  <p
                    className='text-center my-5'
                    style={{ fontSize: '1.1rem', color: 'black' }}
                  >
                    사진을 업로드해주세요. 프로필, 제품, 포트폴리오사진은
                    필수사항입니다.
                  </p>
                  <div className='form-row'>
                    <div className='col-md-12 mb-5'>
                      <label>프로필 사진</label>
                      <p style={{ lineHeight: '1.3' }}>
                        이미지 최적화를 위해 사진의 가로:세로 비율을 1:1로
                        맞춰주시기 바랍니다. 또한 108px X 108px 이상의 이미지를
                        업로드해주시기 바랍니다.
                      </p>
                      <div className='d-block'>
                        <div
                          className='btn btn-solid btn-file'
                          style={{
                            backgroundImage:
                              'linear-gradient(30deg, black 50%, transparent 50%)',
                            color: 'white',
                            border: 'none',
                          }}
                        >
                          프로필사진 업로드
                          <input
                            type='file'
                            accept='image/*'
                            onChange={this.onProfileImgChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-12'>
                      {this.state.profileImgBlob ? (
                        <img
                          className='avatar-img rounded-circle mb-5'
                          src={this.state.profileImgBlob}
                          style={{ maxWidth: '20%', height: '15vh' }}
                          alt='profile-blob'
                        />
                      ) : null}
                    </div>
                  </div>

                  <div className='form-row'>
                    <div className='col-md-12 mb-5'>
                      <label>포트폴리오 이미지</label>
                      <p style={{ lineHeight: '1.3' }}>
                        포트폴리오 이미지는 최대 40개까지 업로드 할 수 있습니다.
                        <br />
                        포트폴리오 이미지는 비율에 상관없이 자동 최적화되며 다만
                        가로 1,000px 이상의 이미지들을 업로드해주시기 바랍니다.
                      </p>
                      <div className='d-block'>
                        <div
                          className='btn btn-solid btn-file'
                          style={{
                            backgroundImage:
                              'linear-gradient(30deg, black 50%, transparent 50%)',
                            color: 'white',
                            border: 'none',
                          }}
                        >
                          포트폴리오 업로드
                          <input
                            type='file'
                            accept='image/*'
                            onChange={this.onPortfolioImgsChange}
                            multiple
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className='portfolio-section portfolio-padding pt-0 port-col zoom-gallery'>
                    <div className='container'>
                      <div className='isotopeContainer row'>
                        <Masonry
                          breakpointCols='4'
                          className='my-masonry-grid'
                          columnClassName='my-masonry-grid_column'
                        >
                          {/* SHOW portfolio imgs */}
                          {this.showPortfolioImgs()}
                        </Masonry>
                      </div>
                    </div>
                  </section>
                  {this.state.error ? (
                    <p
                      className='text-center my-5'
                      style={{ fontSize: '1.1rem', color: 'red' }}
                    >
                      프로필, 포트폴리오 사진은 필수 항목입니다. 사진을 업로드
                      해주세요.
                    </p>
                  ) : null}
                  <div className='d-flex justify-content-center mb-5'>
                    <button
                      onClick={() => this.props.onCancel()}
                      className='btn btn-solid mr-5'
                    >
                      수정하기
                    </button>
                    <button
                      onClick={() => this.setState({ loading: true })}
                      className='btn btn-solid btn-submit'
                    >
                      제출하기
                    </button>
                  </div>
                </form>
                <div
                  className='sweet-loading'
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: '80%',
                    left: '25%',
                    margin: '0 auto',
                  }}
                >
                  {this.state.loading ? (
                    <h5 className='mb-5' style={{ color: 'red' }}>
                      업로드중입니다. 페이지 새로고침을 하지말고 잠깐만
                      기다려주세요^^! <br /> 이미지 사이즈가 크다면 오래 걸릴 수
                      있습니다. <br /> 10MB당 10초정도 소요됩니다.
                    </h5>
                  ) : null}

                  <PacmanLoader
                    size={100}
                    color={'#8aad3a'}
                    loading={this.state.loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { formValues: state.form.artistForm.values };
};

export default connect(mapStateToProps, actions)(RegisterFormReview);
