import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import validateEmail from '../utils/validateEmail';
import * as actions from '../../actions';
import SignInFormField from './SignInFormField';

const FIELDS = [
    { label: '이메일주소', name: 'username', noValueError: '이메일을 입력해주세요.', id: 'exampleInputEmail' },
    { label: '비밀번호', name: 'password', noValueError: '비밀번호를 입력해주세요.', id: 'exampleInputPassword' }
];

class SignInForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name, id, noValueError }) => {
            return <Field type="text" className="form-control form-control-user" component={ SignInFormField } key={ name } label={ label } name={ name } noValueError={ noValueError } id={ id } />;
        });
    }
    showError() {
        if (this.props.authErrorCode === 401) {
            return <div>ID or Password is wrong</div>;
        }
        return null;
    }

    render() {
        return (
            <form onSubmit={ this.props.handleSubmit(values => this.props.signInWithUs(values)) }>
                { this.renderFields() }
                { this.showError() }
                < button type="submit" className="btn btn-primary btn-user btn-block btn-yellow" > 로그인</button >
                <div className="text-right">
                    <a className="small-text" href="forgot-password.html">비밀번호 찾기</a>
                </div>
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

const mapStateToProps = state => {
    return { authErrorCode: state.authErrorCode };
};

const wrappedComponent = connect(mapStateToProps, actions)(SignInForm);
export default reduxForm({ validate: validate, form: 'signInForm' })(wrappedComponent);
