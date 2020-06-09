import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../../actions';
import FIELDS from './RegisterFields';

class RegisterFormReview extends Component {
  state = {
    file: null,
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { createArtist, formValues } = this.props;
    createArtist(formValues, this.state.file);
  };

  onFileInputChange = (event) => {
    this.setState({ file: event.target.files[0] });
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
                        onChange={this.onFileInputChange}
                      />
                    </div>
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
