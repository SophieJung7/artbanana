import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <Field type="text" name="email" component="input" className="form-control" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <Field type="text" name="password" component="input" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({ form: 'signInForm' })(SignInForm);
