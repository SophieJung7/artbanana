import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SignInWithOthers = () => {
  return (
    <div>
      <div className="text-center mt-5 mb-4">SNS로 간편하게 가입하세요.</div>
      <div className="mb-5">
        <a
          href="/auth/google"
          style={{ color: 'white' }}
          className="btn btn-user btn-block btn-google border-radius-zero"
        >
          <div className="d-flex align-items-center justify-content-center">
            <FaGoogle className="mr-2" />
            구글로 로그인
          </div>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default SignInWithOthers;
