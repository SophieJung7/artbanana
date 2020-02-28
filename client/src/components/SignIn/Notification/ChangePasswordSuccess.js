import React from 'react';
import Alert from '../../Alert';

const ChangePasswordSuccess = () => {
  return (
    <div>
      <Alert
        message='비밀번호가 변경되었습니다.'
        linkName='홈페이지로 돌아가기'
        linkAddress='/'
      />
    </div>
  );
};

export default ChangePasswordSuccess;
