import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import * as actions from '../../actions';
import SignUpForm from './SignUpForm';
import SignUpWithOthers from './SignUpWithOthers';

class SignUp extends Component {
  componentDidMount() {
    this.props.removeAuthError();
  }
  render() {
    const { translate } = this.props;

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
                        <h1 className='h4 text-gray-900 mb-4'>
                          {translate('Signup_within_one_minute')}
                        </h1>
                      </div>
                      <SignUpForm />
                      <div className='mt-2 mb-5'>
                        <a className='small-text' href='forgot-password.html'>
                          {translate('Not_disclose_personal_info')}
                        </a>
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

export default connect(null, actions)(withTranslate(SignUp));
