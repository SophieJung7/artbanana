import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import * as actions from '../../actions';

class ChangePassword extends Component {
  state = {
    prePassword: '',
    newPassword: ''
  };
  translate = this.props.translate;

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

  render() {
    return (
      <div className='container'>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div className='form-group'>
            <label>{this.translate('Enter_your_new_password')}</label>
            <input
              type='password'
              className='form-control'
              name='prePassword'
              onChange={e => this.setState({ prePassword: e.target.value })}
            />
            <label>{this.translate('Enter_your_new_password_again')}</label>
            <input
              type='password'
              className='form-control'
              name='newPassword'
              onChange={e => this.setState({ newPassword: e.target.value })}
            />
            {this.isPasswordSame()}
          </div>
          <button type='submit' className='btn btn-yellow'>
            {this.translate('Change_password')}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(withTranslate(ChangePassword));
