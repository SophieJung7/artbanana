import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SignUpForm from './SignUpForm';
import SignUpWithOthers from './SignUpWithOthers';

class SignUp extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.removeAuthError();
  }

  render() {
    return (
      <div className='container'>
        {/* <!-- Outer Row --> */}
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-12 col-md-9'>
            <div className='card o-hidden border-0 shadow-lg my-5'>
              <div className='card-body p-0'>
                {/* <!-- Nested Row within Card Body --> */}
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-block bg-signup-image'></div>
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='mt-5 text-center'>
                        <h1 className='h4 text-gray-900 mb-4 btn-sign-up'>
                          1분안에 가입하기
                        </h1>
                      </div>
                      <SignUpForm />
                      <div className='mt-2 mb-5'>
                        <div className='small-text'>
                          * 아트바나나는 개인정보를 제3자에게 제공하지 않습니다.
                        </div>
                      </div>
                      <hr />
                      <SignUpWithOthers />
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

export default connect(null, actions)(SignUp);
