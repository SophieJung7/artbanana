import React from 'react';

const RegisterFormField = ({
  input,
  label,
  styleName,
  size,
  placeholder,
  meta: { error, touched },
}) => {
  return (
    <div className={`${size} ${styleName}`}>
      <label>{label}</label>
      <input
        {...input}
        className='form-control mb-3'
        placeholder={placeholder}
      />
      <small className='form-text' style={{ color: 'red' }}>
        {touched && error}
      </small>
    </div>
  );
};

export default RegisterFormField;
