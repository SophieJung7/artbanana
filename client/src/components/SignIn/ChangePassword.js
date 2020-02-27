import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ChangePassword extends Component {
  renderInput({ input, meta: { error, touched } }) {
    return (
      <div>
        <input {...input} type='password' className='form-control' />
        <small className='form-text text-muted'>{touched && error}</small>
      </div>
    );
  }

  onChangePW(formValues) {
    this.props.changePW(formValues);
    // console.log(formValues);
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.props.handleSubmit(this.onChangePW)}>
          <div className='form-group'>
            <label>새로운 비밀번호를 입력해주세요.</label>
            <Field name='prePassword' component={this.renderInput} />
            <label>새로운 비밀번호를 다시한번 입력해주세요.</label>
            <Field name='newPassword' component={this.renderInput} />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (values.prePassword && values.newPassword) {
    if (values.prePassword !== values.newPassword) {
      errors.newPassword = '비밀번호가 일치하지 않습니다!';
    }
  }
  return errors;
};

const wrappedComponent = connect(null, actions)(ChangePassword);
export default reduxForm({ validate: validate, form: 'changePasswordForm' })(
  wrappedComponent
);
