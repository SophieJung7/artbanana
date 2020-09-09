import React, { Component } from 'react';
import axios from 'axios';
import history from '../../history';
import validatePassword from '../utils/validatePassword';
import PacmanLoader from 'react-spinners/PacmanLoader';

class ResetPassword extends Component {
  state = {
    renderForm: true,
    loading: true,
    entriedPassword: '',
    reEntriedPassword: '',
    error: false,
  };

  componentDidMount = async () => {
    try {
      // Validate Token
      const res = await axios.get(
        `/auth/pw-reset/${this.props.match.params.token}`
      );
      // Token Validation Success
      if (res.status === 200) {
        this.setState({ loading: false });
        this.setState({ renderForm: true });
      }
      // Token Validation Fail
      if (res.status === 401) {
        this.setState({ loading: false });
        this.setState({ renderForm: false });
      }
      // Token Validation Error
    } catch (err) {
      this.setState({ loading: false });
      this.setState({ renderForm: false });
    }
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    if (this.state.entriedPassword !== this.state.reEntriedPassword) {
      alert('비밀번호 재입력란에 같은 비밀번호를 입력해주세요.');
    } else {
      const newPassword = this.state.reEntriedPassword;
      const res = await axios.post(
        `/auth/pw-reset/${this.props.match.params.token}`,
        {
          newPassword: newPassword,
        }
      );
      if (res.status === 200) {
        history.push('/change-password/success');
      } else {
        this.setState({ error: true });
      }
    }
  };

  isPasswordSame() {
    if (this.state.entriedPassword & this.state.reEntriedPassword) {
      if (this.state.entriedPassword !== this.state.reEntriedPassword) {
        return (
          <small style={{ color: 'red' }} className='form-text'>
            비밀번호 재입력란에 같은 비밀번호를 입력해주세요.
          </small>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  isPasswordStrong() {
    const password = this.state.entriedPassword;
    if (password) {
      const isWeak = validatePassword(password);
      if (isWeak) {
        return (
          <small style={{ color: 'red' }} className='form-text'>
            비밀번호는 6자 이상 입력해주시고 숫자 및 영문 소문자를 1개 이상
            사용해주세요.
          </small>
        );
      } else {
        return null;
      }
    }
  }

  render() {
    if (!this.state.error && this.state.renderForm) {
      return (
        <div className='container'>
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
          <form onSubmit={(e) => this.onFormSubmit(e)}>
            <div className='form-group'>
              <label>비밀번호를 입력해주세요.</label>
              <input
                type='password'
                className='form-control col-sm-6'
                name='entriedPassword'
                onChange={(e) =>
                  this.setState({ entriedPassword: e.target.value })
                }
              />
              <label>비밀번호를 다시 입력해주세요.</label>
              <input
                type='password'
                className='form-control col-sm-6'
                name='reEntriedPassword'
                onChange={(e) =>
                  this.setState({ reEntriedPassword: e.target.value })
                }
              />
              {this.isPasswordSame()}
              {this.isPasswordStrong()}
            </div>
            <button type='submit' className='btn btn-solid'>
              비밀번호 변경하기
            </button>
          </form>
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div className='container'>
          <h5>오류입니다. 다시 비밀번호 변경을 해주세요.</h5>
        </div>
      );
    }
    return (
      <div className='container'>
        <h5>
          비밀번호 최대 변경기간 1시간을 초과하였습니다. 다시 비밀번호 변경을
          해주세요.
        </h5>
      </div>
    );
  }
}

export default ResetPassword;
