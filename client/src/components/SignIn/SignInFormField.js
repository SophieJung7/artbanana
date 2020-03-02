import React from 'react';

const SignInFormField = ({
  input,
  id,
  noValueError,
  type,
  meta: { error, touched }
}) => {
  return (
    <div className='form-group'>
      <input
        {...input}
        className='form-control form-control-user'
        id={id}
        placeholder={noValueError}
        type={type}
      />
      <small style={{ color: 'red' }} className='form-text'>
        {touched && error}
      </small>
    </div>
  );
};

export default SignInFormField;
