import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import _ from 'lodash';
import validateEmail from '../utils/validateEmail';
import * as actions from '../../actions';
import SignInFormField from './SignInFormField';

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

class SignInForm extends Component {
  translate = this.props.translate;

  renderFields() {
    return _.map(FIELDS, ({ label, name, id, noValueError, type }) => {
      const translated_label = this.translate(label || 'Email');
      const translated_noValueError = this.translate(
        noValueError || 'Enter_your_email'
      );
      return (
        <Field
          type={type}
          className='form-control form-control-user'
          component={SignInFormField}
          key={name}
          label={translated_label}
          name={name}
          noValueError={translated_noValueError}
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
          {this.translate('Email_or_Password_is_incorrect')}
        </small>
      );
    }
    return null;
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values =>
          this.props.signInWithUs(values)
        )}
      >
        {this.renderFields()}
        {this.showError()}
        <button type='submit' className='btn btn-user btn-block btn-yellow'>
          {this.translate('Login')}
        </button>
        <div className='text-right'>
          <a className='small-text' href='/change-password'>
            {this.translate('Find_password')}
          </a>
        </div>
      </form>
    );
  }
}

const validate = values => {
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

const mapStateToProps = state => {
  return { authErrorCode: state.authErrorCode };
};

const wrappedComponent = connect(
  mapStateToProps,
  actions
)(withTranslate(SignInForm));
export default reduxForm({ validate: validate, form: 'signInForm' })(
  wrappedComponent
);
