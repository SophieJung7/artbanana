import React from 'react';

const FormOneField = ({ input, label, name }) => {
  return (
    <div class='form-group'>
      <label for={name}>{label}</label>
      <input {...input} type='text' class='form-control' />
    </div>
  );
};

export default FormOneField;
