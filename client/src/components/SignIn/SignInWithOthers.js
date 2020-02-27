import React from 'react';
import naverLogo from '../../assets/logos/naver.svg';
import { FaGoogle } from 'react-icons/fa';

const SignInWithOthers = () => {
  return (
    <div>
      <div className='text-center mt-5 mb-4'>SNS로 간편하게 로그인하세요.</div>
      <div className='mb-5'>
        <a
          href='/auth/naver'
          style={{ color: 'white' }}
          className='btn btn-user btn-block btn-naver border-radius-zero'
        >
          <div className='d-flex align-items-center justify-content-center'>
            <img
              src={naverLogo}
              alt='Naver'
              viewBox='0 0 60 55'
              width='13'
              height='13'
              className='mr-2'
            />
            네이버로 로그인
          </div>
        </a>
        <a
          href='/auth/google'
          style={{ color: 'white' }}
          className='btn btn-user btn-block btn-google border-radius-zero'
        >
          <div className='d-flex align-items-center justify-content-center'>
            <FaGoogle className='mr-2' />
            구글로 로그인
          </div>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default SignInWithOthers;
