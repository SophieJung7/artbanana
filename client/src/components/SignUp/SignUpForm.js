import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import validateEmail from '../utils/validateEmail';
import * as actions from '../../actions';
import SignUpFormField from './SignUpFormField';

const FIELDS = [
    { label: '이메일주소', name: 'username', noValueError: '이메일을 입력해주세요.', id: 'exampleInputEmail' },
    { label: '비밀번호', name: 'password', noValueError: '비밀번호를 입력해주세요.', id: 'exampleInputPassword' }
];

class SignUpForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name, id, noValueError }) => {
            return <Field type="text" className="form-control form-control-user" component={ SignUpFormField } key={ name } label={ label } name={ name } noValueError={ noValueError } id={ id } />;
        });
    }

    // showError() {
    //     if (this.props.authErrorCode === 401) {
    //         return <div>ID or Password is wrong</div>;
    //     }
    //     return null;
    // }

    render() {
        return (
            <form onSubmit={ this.props.handleSubmit(values => this.props.signUp(values)) }>
                { this.renderFields() }
                {/* { this.showError() } */ }
                < button type="submit" className="btn btn-primary btn-user btn-block btn-yellow" >회원가입과 함께 이메일인증</button >
            </form >
        );
    }
}


const validate = values => {
    const errors = {};
    // Validating Email form 
    errors.username = validateEmail(values.username || '');

    _.each(FIELDS, ({ name, noValueError }) => {
        if (!values[ name ]) {
            errors[ name ] = noValueError;
        }
    });
    return errors;
};


const wrappedComponent = connect(null, actions)(SignUpForm);
export default reduxForm({ validate: validate, form: 'signUpForm' })(wrappedComponent);
