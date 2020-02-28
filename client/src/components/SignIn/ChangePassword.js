import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ChangePassword extends Component {
  state = {
    prePassword: '',
    newPassword: ''
  };

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.prePassword !== this.state.newPassword) {
      alert('비밀번호가 일치하지 않습니다.');
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
            입력하신 비밀번호가 일치하지 않습니다.
          </small>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div className='form-group'>
            <label>새로운 비밀번호를 입력해주세요.</label>
            <input
              type='password'
              className='form-control'
              name='prePassword'
              onChange={e => this.setState({ prePassword: e.target.value })}
            />
            <label>새로운 비밀번호를 다시한번 입력해주세요.</label>
            <input
              type='password'
              className='form-control'
              name='newPassword'
              onChange={e => this.setState({ newPassword: e.target.value })}
            />
            {this.isPasswordSame()}
          </div>
          <button type='submit' className='btn btn-yellow'>
            비밀번호 변경하기
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(ChangePassword);
