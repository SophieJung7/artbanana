import React from 'react';
import { Link } from 'react-router-dom';

const ChangePasswordSuccess = () => {
  return (
    <div className='container'>
      <h5 className='mt-5'>비밀번호를 변경하였습니다. 다시 로그인해주세요!</h5>
      <Link to='/signin' className='btn btn-solid mt-3'>
        로그인하기
      </Link>
    </div>
  );
};

export default ChangePasswordSuccess;
