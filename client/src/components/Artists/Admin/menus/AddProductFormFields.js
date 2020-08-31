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
        <div className='mb-4'>
          <h3>사이즈 및 가격정보</h3>
          <ul>
            <li>* S사이즈: A5사이즈/ 148mm X 210mm/ 최대 오브젝트 1명 </li>
            <br />
            <li>* M사이즈: A4사이즈/ 210mm X 297mm/ 최대 오브젝트 2명</li>
            <br />
            <li>* L사이즈: A3사이즈/ 297mm X 420mm/ 최대 오브젝트 4명</li>
            <br />
            <li>* XL사이즈: A2사이즈/ 420mm X 594mm/ 최대 오브젝트 5명</li>
          </ul>

          <div className='mt-3'>
            <h5 style={{ fontSize: '1.1rem', fontWeight: '600' }}>
              아트바나나는 월 1회 2주간 50% 할인행사를 진행합니다. 이에 유의하여
              가격을 결정해주세요.^^
            </h5>
          </div>
        </div>
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
