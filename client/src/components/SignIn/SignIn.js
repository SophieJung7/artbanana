import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SignInForm from './SignInForm';
import SignInWithOthers from './SignInWithOthers';

class SignIn extends Component {
  componentDidMount() {
    this.props.removeAuthError();
  }
  render() {
    return (
      <div class='container'>
        {/* <!-- Outer Row --> */}
        <div class='row justify-content-center'>
          <div class='col-xl-10 col-lg-12 col-md-9'>
            <div class='card o-hidden border-0 shadow-lg my-5'>
              <div class='card-body p-0'>
                {/* <!-- Nested Row within Card Body --> */}
                <div class='row'>
                  <div class='col-lg-6 d-none d-lg-block bg-login-image'></div>
                  <div class='col-lg-6'>
                    <div class='p-5'>
                      <div class='text-center'>
                        <h1 class='h4 text-gray-900 mb-4'>로그인</h1>
                      </div>
                      <SignInForm />
                      <hr />
                      <SignInWithOthers />
                      <Link
                        to='/signup'
                        class='mt-5 btn btn-user btn-block btn-yellow'
                      >
                        캣스냅 회원가입 하기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);
