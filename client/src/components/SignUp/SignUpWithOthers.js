import React from 'react';
import naverLogo from '../../assets/logos/naver.svg';
import { FaGoogle } from 'react-icons/fa';

const SignUpWithOthers = () => {
  return (
    <div className='mb-5 mt-5'>
      <div class='text-center'>
        <h1 class='h4 text-gray-900 mb-4'>아니면 SNS로 가입하기</h1>
      </div>
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
            네이버로 회원가입
          </div>
        </a>
        <a
          href='/auth/google'
          style={{ color: 'white' }}
          className='btn btn-user btn-block btn-google border-radius-zero'
        >
          <div className='d-flex align-items-center justify-content-center'>
            <FaGoogle className='mr-2' />
            구글로 회원가입
          </div>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default SignUpWithOthers;
