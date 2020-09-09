import React, { Component } from 'react';
import axios from 'axios';
import PacmanLoader from 'react-spinners/PacmanLoader';

class LostPassword extends Component {
  state = {
    email: '',
    showSentEmailSuccess: false,
    error: false,
    loading: false,
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      this.setState({ loading: true });
      const res = await axios.post('/auth/forgot', {
        userName: this.state.email,
      });
      if (res.status !== 200) {
        this.setState({ error: true });
      } else {
        this.setState({ loading: false });
        this.setState({ showSentEmailSuccess: true });
      }
    } catch (err) {
      this.setState({ loading: false });
      this.setState({ error: true });
    }
  };

  render() {
    if (!this.state.showSentEmailSuccess) {
      return (
        <div className='container'>
          <form onSubmit={(e) => this.onFormSubmit(e)}>
            <div className='form-group mt-4 row'>
              {this.state.error ? (
                <div className='col-12 mb-4'>
                  <h5 style={{ color: 'red' }}>
                    등록되어있지 않은 이메일입니다. 다시 입력해주세요.
                  </h5>
                </div>
              ) : null}
              <div className='d-flex justify-content-center'>
                <div
                  className='sweet-loading'
                  style={{
                    display: 'block',
                    position: 'absolute',
                    margin: '0 auto',
                    top: '70%',
                    left: '25%',
                  }}
                >
                  <PacmanLoader
                    size={100}
                    color={'#8aad3a'}
                    loading={this.state.loading}
                  />
                </div>
              </div>
              <label className='col-12'>
                회원가입한 이메일을 입력해주세요.
              </label>
              <div className='col-sm-6'>
                <input
                  type='email'
                  className='form-control'
                  name='prePassword'
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
            </div>
            <button type='submit' className='btn btn-solid'>
              비밀번호변경 이메일보내기
            </button>
          </form>
        </div>
      );
    }
    return (
      <div className='container'>
        <h5 className='mt-5' style={{ fontWeight: '600' }}>
          기입해주신 이메일로 비밀번호 재설정 링크를 보냈습니다. 확인해주세요.
        </h5>
      </div>
    );
  }
}

export default LostPassword;
