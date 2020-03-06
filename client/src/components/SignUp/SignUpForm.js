import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import _ from 'lodash';
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';
import * as actions from '../../actions';
import SignUpFormField from './SignUpFormField';

const FIELDS = [
  {
    label: 'Email',
    name: 'username',
    noValueError: 'Enter_your_email',
    id: 'exampleInputEmail',
    type: 'text'
  },
  {
    label: 'Password',
    name: 'password',
    noValueError: 'Enter_your_password',
    id: 'exampleInputPassword',
    type: 'password'
  }
];

class SignUpForm extends Component {
  translate = this.props.translate;

  renderFields() {
    return _.map(FIELDS, ({ label, name, id, noValueError, type }) => {
      const translated_label = this.translate(label || 'Email');
      const translated_noValueError = this.translate(
        noValueError || 'Enter_your_email'
      );
      return (
        <Field
          className='form-control form-control-user'
          component={SignUpFormField}
          key={name}
          label={translated_label}
          name={name}
          noValueError={translated_noValueError}
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
          {this.translate('Already_registered')}
        </small>
      );
    }
    return null;
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values => this.props.signUp(values))}
      >
        {this.renderFields()}
        {this.showError()}
        <button
          type='submit'
          className='btn btn-user btn-block btn-yellow'
          id='btn-yellow-id'
        >
          {this.translate('Sign_up_with_email_verification')}
        </button>
      </form>
    );
  }
}

const validate = values => {
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

const mapStateToProps = state => {
  return { authErrorCode: state.authErrorCode };
};

const wrappedComponent = connect(
  mapStateToProps,
  actions
)(withTranslate(SignUpForm));
export default reduxForm({ validate: validate, form: 'signUpForm' })(
  wrappedComponent
);
