import React from 'react';
// import naverLogo from '../../assets/logos/naver.svg';
import { FaGoogle } from 'react-icons/fa';

const SignUpWithOthers = (props) => {
  return (
    <div className="mb-5 mt-5">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">아니면 SNS로 가입하기</h1>
      </div>
      <div className="mb-5">
        <a
          href="/auth/google"
          style={{ color: 'white' }}
          className="btn btn-user btn-block btn-google border-radius-zero"
        >
          <div className="d-flex align-items-center justify-content-center">
            <FaGoogle className="mr-2" />
            구글로 회원가입
          </div>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default SignUpWithOthers;
