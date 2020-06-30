import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';
import * as actions from '../../actions';
import SignUpFormField from './SignUpFormField';

const FIELDS = [
  {
    label: '이메일',
    name: 'username',
    noValueError: '이메일 주소를 입력해주세요.',
    id: 'exampleInputEmail',
    type: 'text',
  },
  {
    label: '비밀번호',
    name: 'password',
    noValueError: '비밀번호를 입력해주세요.',
    id: 'exampleInputPassword',
    type: 'password',
  },
];

class SignUpForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, id, noValueError, type }) => {
      return (
        <Field
          className='form-control form-control-user'
          component={SignUpFormField}
          key={name}
          label={label}
          name={name}
          noValueError={noValueError}
          id={id}
          type={type}
        />
      );
    });
  }

  showError() {
    if (this.props.authErrorCode === 401 || this.props.authErrorCode === 409) {
      return (
        <small
          style={{ color: 'red', fontWeight: '500' }}
          className='form-text mb-3'
        >
          이미 가입되어 있는 이메일주소 입니다.
        </small>
      );
    }
    return null;
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit((values) =>
          this.props.signUp(values)
        )}
      >
        {this.renderFields()}
        {this.showError()}
        <button
          type='submit'
          className='btn btn-user btn-block py-3 btn-signup'
          id='btn-yellow-id'
          style={{
            backgroundColor: '#b5dccd',
          }}
        >
          회원가입과 함께 이메일인증
        </button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  // Validating Email form
  errors.username = validateEmail(values.username || '');
  errors.password = validatePassword(values.password || '');

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

const mapStateToProps = (state) => {
  return { authErrorCode: state.authErrorCode };
};

const wrappedComponent = connect(mapStateToProps, actions)(SignUpForm);
export default reduxForm({ validate: validate, form: 'signUpForm' })(
  wrappedComponent
);
