import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import validatePassword from '../utils/validatePassword';

class ChangePassword extends Component {
  state = {
    prePassword: '',
    newPassword: '',
  };

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.prePassword !== this.state.newPassword) {
      const message = this.translate('Password_is_incorrect');
      alert(message);
    } else {
      const newPassword = this.state.newPassword;
      this.props.changePW(newPassword);
    }
  }

  isPasswordSame() {
    if (this.state.prePassword & this.state.newPassword) {
      if (this.state.prePassword !== this.state.newPassword) {
        return (
          <small style={{ color: 'red' }} className='form-text'>
            {this.translate('Password_is_incorrect')}
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
    const password = this.state.prePassword;
    if (password) {
      const isWeak = validatePassword(password);
      if (isWeak) {
        return (
          <small style={{ color: 'red' }} className='form-text'>
            {this.translate('Password_strength')}
          </small>
        );
      } else {
        return null;
      }
    }
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <div className='form-group'>
            <label>비밀번호를 입력해주세요.</label>
            <input
              type='password'
              className='form-control'
              name='prePassword'
              onChange={(e) => this.setState({ prePassword: e.target.value })}
            />
            <label>비밀번호를 다시 입력해주세요.</label>
            <input
              type='password'
              className='form-control'
              name='newPassword'
              onChange={(e) => this.setState({ newPassword: e.target.value })}
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
}

export default connect(null, actions)(ChangePassword);
