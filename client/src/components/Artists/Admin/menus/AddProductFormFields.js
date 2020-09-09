import React from 'react';

const AddProductFormFields = ({
  input,
  label,
  size,
  placeholder,
  meta: { error, touched },
}) => {
  //   기타 제품소개
  if (input.name === 'description') {
    return (
      <div className='col-12'>
        <label>{label}</label>
        <textarea
          {...input}
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='5'
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
  if (input.name === 'productCategory') {
    return (
      <div className={`${size}`}>
        <label>{label}</label>
        <select
          {...input}
          className='form-control mb-3'
          placeholder={placeholder}
          required
        >
          <option></option>
          <option value='pencil'>사진정밀묘사(연필, 색연필 등)</option>
          <option value='caricature'>캐리커처(연필, 색연필 등)</option>
          <option value='illustration'>사진일러스트레이션(디지털)</option>
          <option value='photoshop'>사진아트</option>
        </select>
        <small style={{ color: 'red' }}>{touched && error}</small>
      </div>
    );
  }
  if (
    input.name === 'price.sm' ||
    input.name === 'price.md' ||
    input.name === 'price.lg' ||
    input.name === 'price.xl' ||
    input.name === 'price.per'
  ) {
    return (
      <div className={`${size}`}>
        <label>{label}</label>
        <input
          {...input}
          className='form-control mb-3'
          placeholder={placeholder}
          required
        />
        {input.value ? (
          <div>
            <h5 style={{ fontSize: '1.1rem', color: 'red' }}>
              {input.value.search(/\D/i) > 0
                ? '쉼표, 문자를 제외한 숫자만 입력해주세요.'
                : `50% 할인가격: ${(input.value * 0.5).toLocaleString('en')}원`}
            </h5>
          </div>
        ) : null}
        <small className='form-text' style={{ color: 'red' }}>
          {touched && error}
        </small>
      </div>
    );
  }

  return (
    <div className={`${size}`}>
      <label>{label}</label>
      <input
        {...input}
        className='form-control mb-3'
        placeholder={placeholder}
        required
      />
      <small className='form-text' style={{ color: 'red' }}>
        {touched && error}
      </small>
    </div>
  );
};

export default AddProductFormFields;
