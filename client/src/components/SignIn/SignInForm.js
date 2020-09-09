import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import validateEmail from '../utils/validateEmail';
import * as actions from '../../actions';
import SignInFormField from './SignInFormField';

const FIELDS = [
  {
    label: '이메일',
    name: 'username',
    noValueError: '이메일주소를 입력해주세요.',
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

class SignInForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, id, noValueError, type }) => {
      return (
        <Field
          type={type}
          className='form-control form-control-user'
          component={SignInFormField}
          key={name}
          label={label}
          name={name}
          noValueError={noValueError}
          id={id}
        />
      );
    });
  }
  showError() {
    if (this.props.authErrorCode === 401) {
      return (
        <small
          style={{ color: 'red', fontWeight: '500' }}
          className='form-text mb-3'
        >
          이메일주소나 비밀번호가 틀렸습니다.
        </small>
      );
    }
    return null;
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit((values) =>
          this.props.signInWithUs(values)
        )}
      >
        {this.renderFields()}
        {this.showError()}
        <button
          type='submit'
          className='btn btn-user btn-block btn-sign-in'
          style={{
            backgroundColor: '#b5dccd',
          }}
        >
          로그인
        </button>
        <div className='text-right'>
          <Link className='small-text' to='/lost-password'>
            비밀번호 찾기
          </Link>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  // Validating Email form
  errors.username = validateEmail(values.username || '');

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

const wrappedComponent = connect(mapStateToProps, actions)(SignInForm);
export default reduxForm({ validate: validate, form: 'signInForm' })(
  wrappedComponent
);
