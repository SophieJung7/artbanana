import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../../actions';
import FIELDS from './RegisterFields';

class RegisterFormReview extends Component {
  state = {
    profileImg: {},
    profileImgBlob: '',
    productImgs: [],
    productImgBlobs: [],
    productFiles: null,
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { createArtist, formValues } = this.props;
    createArtist(formValues, this.state.productFiles);
  };

  onProfileImgChange = (event) => {
    const file = event.target.files[0];
    const fileBlob = URL.createObjectURL(file, { oneTimeOnly: true });
    this.setState({ profileImg: file, profileImgBlob: fileBlob });
  };

  onProductImgsChange = (event) => {
    this.setState({ productFiles: event.target.files });
    const files = [...this.state.productImgs, ...event.target.files];
    const fileBlobs = [];
    for (var i = 0; i < files.length; i++) {
      let fileBlob = URL.createObjectURL(files[i], { oneTimeOnly: true });
      fileBlobs.push({
        path: fileBlob,
        name: files[i].name,
      });
    }
    this.setState({ productImgs: files, productImgBlobs: fileBlobs });
  };

  showProductImgs = () => {
    if (this.state.productImgBlobs) {
      return this.state.productImgBlobs.map(({ path }) => {
        return (
          <img
            key={path}
            src={path}
            style={{ maxWidth: '20%', height: '15vh' }}
            className='img-fluid img-thumbnail mx-3'
            alt='profile photo'
          />
        );
      });
    }
    return null;
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
      <section className='register-page section-b-space'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h3>아트바나나 아티스트 등록하기</h3>
              <div className='theme-card'>
                <form onSubmit={this.onFormSubmit} className='theme-form'>
                  <h5>작성한 내용을 확인해주세요.</h5>
                  {reviewFields}
                  <h5>사진을 업로드 해주세요.</h5>
                  <div className='form-row'>
                    <div className='col-md-12'>
                      <label>프로필 사진</label>
                      <input
                        type='file'
                        accept='image/*'
                        onChange={this.onProfileImgChange}
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-12'>
                      {this.state.profileImgBlob ? (
                        <img
                          src={this.state.profileImgBlob}
                          style={{ maxWidth: '20%', height: '15vh' }}
                          className='img-fluid img-thumbnail'
                          alt='profile photo'
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-12'>
                      <label>제품사진</label>
                      <input
                        type='file'
                        accept='image/*'
                        onChange={this.onProductImgsChange}
                        multiple
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-12'>{this.showProductImgs()}</div>
                  </div>
                  <button
                    onClick={() => this.props.onCancel()}
                    className='btn btn-solid mr-5'
                  >
                    수정하기
                  </button>
                  <button className='btn btn-solid btn-submit'>제출하기</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { formValues: state.form.artistForm.values };
};

export default connect(mapStateToProps, actions)(RegisterFormReview);
