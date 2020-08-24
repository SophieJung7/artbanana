import React from 'react';

const AddProductFormFields = ({ input, label, meta: { error, touched } }) => {
  return (
    // <div className='form form-label-center'>
    //   <div className='form-group mb-3 row'>
    //     <label className='col-xl-3 col-sm-4 mb-0'>{label}</label>
    //     <div className='col-xl-8 col-sm-7'>
    //       <input {...input} className='form-control' />
    //     </div>
    //   </div>
    // </div>

    <div className='col-md-6'>
      <label>{label}</label>
      <input
        {...input}
        className='form-control mb-3'
        //   placeholder={placeholder}
      />
      <small className='form-text' style={{ color: 'red' }}>
        {touched && error}
      </small>
    </div>
  );
};

export default AddProductFormFields;
