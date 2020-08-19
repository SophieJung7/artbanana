import React from 'react';

const RegisterFormField = ({
  input,
  label,
  styleName,
  size,
  placeholder,
  meta: { error, touched },
}) => {
  if (input.name === 'intro') {
    return (
      <div className='col'>
        <label>{label}</label>
        <textarea
          {...input}
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='5'
          placeholder={placeholder}
        ></textarea>
        <small className='form-text' style={{ color: 'red' }}>
          {touched && error}
        </small>
      </div>
    );
  }

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
