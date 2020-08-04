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

  if (input.name === 'productCategory') {
    return (
      <div className={`${size} ${styleName}`}>
        <label>{label}</label>
        <select
          {...input}
          className='form-control mb-3'
          placeholder={placeholder}
        >
          <option></option>
          <option value='pencil'>사진드로잉(연필, 색연필 등)</option>
          <option value='edition'>아트에디션</option>
        </select>
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
