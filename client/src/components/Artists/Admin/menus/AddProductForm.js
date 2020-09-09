import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Check } from 'react-feather';
import _ from 'lodash';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { createProduct } from '../../../../actions';
import AddProductFormFields from './AddProductFormFields';
import {
  COMMON_FIELDS,
  PHYSICAL_PRICE_FIELDS,
  DIGITAL_PRICE_FIELDS,
} from './formFields';

class AddProductForm extends Component {
  state = {
    loading: false,
    error: false,
    productCategory: '',
  };

  onSubmit = async (e) => {
    try {
      e.preventDefault();
      // Show PacmanLoader
      this.setState({ loading: true });
      const formValues = this.props.formValues.values;
      const artistId = this.props.artist._id;
      const productImgs = this.props.productImgFiles;
      const allValues = { ...formValues, artistId, productImgs };
      await this.props.createProduct(artistId, allValues);
      window.location.reload(false);
    } catch (err) {
      this.setState({ error: true });
      this.setState({ loading: false });
    }
  };

  renderProductCategory() {
    return (
      <Field
        type='text'
        component={AddProductFormFields}
        name='productCategory'
        label='제품카테고리 *'
        size='col-12'
        onChange={(event, newValue) =>
          this.setState({ productCategory: newValue })
        }
      />
    );
  }
  // Render Common Fields
  renderFields() {
    return _.map(COMMON_FIELDS, ({ label, name, size, placeholder }) => {
      return (
        <Field
          type='text'
          component={AddProductFormFields}
          key={name}
          name={name}
          label={label}
          size={size}
          placeholder={placeholder}
          //   validate={[(value) => (value ? undefined : 'Required')]}
        />
      );
    });
  }
  // Render For Pencil & Caricature Media
  renderPhysicalPriceFields() {
    if (
      this.state.productCategory === 'pencil' ||
      this.state.productCategory === 'caricature'
    ) {
      return _.map(
        PHYSICAL_PRICE_FIELDS,
        ({ label, name, size, placeholder }) => {
          return (
            <Field
              type='text'
              component={AddProductFormFields}
              key={name}
              name={name}
              label={label}
              size={size}
              placeholder={placeholder}
            />
          );
        }
      );
    }
    return null;
  }

  renderIllustPriceFields() {
    if (this.state.productCategory === 'illustration') {
      return _.map(
        DIGITAL_PRICE_FIELDS,
        ({ label, name, size, placeholder }) => {
          return (
            <Field
              type='text'
              component={AddProductFormFields}
              key={name}
              name={name}
              label={label}
              size={size}
              placeholder={placeholder}
            />
          );
        }
      );
    }
    return null;
  }
  renderPhotoshopPriceFields() {
    if (this.state.productCategory === 'photoshop') {
      return (
        <Field
          type='text'
          component={AddProductFormFields}
          name='price.sm'
          label='가격'
          size='col-md-12'
          placeholder='숫자만 입력 예)155000'
        />
      );
    }
    return null;
  }
  renderPriceInfo() {
    switch (this.state.productCategory) {
      case 'illustration':
        return (
          <div className='mb-4 col-12'>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>
              <Check />
              가격정보
            </h3>
            <h5 style={{ fontSize: '1.1rem' }}>
              디지털미디어의 경우 오브젝트 수에 따라 가격이 결정됩니다. <br />{' '}
              제작이 완료된 원본파일을 아트바나나에 보내주시면 아트바나나가 직접
              프린트하여 고객에게 발송합니다.
            </h5>
            <div className='mt-3'>
              <h5
                style={{ fontSize: '1.1rem', fontWeight: '600', color: 'red' }}
              >
                아트바나나는 월 1회 2주간 50% 할인행사를 진행합니다. 이에
                유의하여 가격을 결정해주세요.^^
              </h5>
            </div>
          </div>
        );
      case 'photoshop':
        return (
          <div className='mb-4 col-12'>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>
              <Check />
              사이즈 및 가격정보
            </h3>
            <h5 style={{ fontSize: '1.1rem' }}>
              제작이 완료된 원본파일을 아트바나나에 보내주시면 아트바나나가 직접
              프린트하여 고객에게 발송합니다.
            </h5>
            <div className='mt-3'>
              <h5
                style={{ fontSize: '1.1rem', fontWeight: '600', color: 'red' }}
              >
                아트바나나는 월 1회 2주간 50% 할인행사를 진행합니다. 이에
                유의하여 가격을 결정해주세요.^^
              </h5>
            </div>
          </div>
        );
      case 'pencil':
      case 'caricature':
        return (
          <div className='mb-4 col-12'>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>
              <Check />
              사이즈 및 가격정보
            </h3>
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
              <h5
                style={{ fontSize: '1.1rem', fontWeight: '600', color: 'red' }}
              >
                아트바나나는 월 1회 2주간 50% 할인행사를 진행합니다. 이에
                유의하여 가격을 결정해주세요.^^ <br />
                사진정밀묘사 및 캐리커처의 경우 아티스트 보호를 위해 최소금액
                98,000원(할인 전) 이하를 책정할 수 없습니다.
              </h5>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <section className='contact-page section-b-space'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <form onSubmit={this.onSubmit} className='theme-form'>
                  <div className='form-row mb-5'>
                    {this.renderProductCategory()}
                    {this.renderPriceInfo()}
                    {this.renderPhysicalPriceFields()}
                    {this.renderIllustPriceFields()}
                    {this.renderPhotoshopPriceFields()}
                    {this.renderFields()}
                    {/* {this.renderConditionFields()} */}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <button
                      type='submit'
                      className='btn btn-solid p-3'
                      style={{ width: '15vw' }}
                    >
                      제품추가하기
                    </button>
                  </div>
                </form>
              </div>
              <div className='d-flex justify-content-center'>
                <div
                  className='sweet-loading'
                  style={{
                    display: 'block',
                    position: 'absolute',
                    margin: '0 auto',
                    top: '70%',
                    left: '25%',
                  }}
                >
                  {this.state.loading ? (
                    <h5 className='mb-5' style={{ color: 'red' }}>
                      업로드중입니다. 페이지 새로고침을 하지말고 잠깐만
                      기다려주세요^^! <br /> 이미지 사이즈가 크다면 오래 걸릴 수
                      있습니다. <br /> 10MB당 10초정도 소요됩니다.
                    </h5>
                  ) : null}

                  <PacmanLoader
                    size={100}
                    color={'#8aad3a'}
                    loading={this.state.loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist, formValues: state.form.productCreate };
};

const validate = (formValues) => {
  const errors = {
    price: {},
  };

  if (!formValues.productCategory) {
    errors.name = '제품카테고리를 입력해주세요.';
  }
  if (!formValues.name) {
    errors.name = '제품명을 입력해주세요.';
  }
  if (!formValues.medium) {
    errors.medium = '작품소재를 입력해주세요.';
  }

  const price = formValues.price || {};

  if (!price.sm) {
    errors.price.sm = 'S사이즈 가격을 입력해주세요.';
  }
  if (!price.md) {
    errors.price.md = 'M사이즈 가격을 입력해주세요.';
  }
  if (!price.lg) {
    errors.price.lg = 'L사이즈 가격을 입력해주세요.';
  }
  if (!price.xl) {
    errors.price.xl = 'XL사이즈 가격을 입력해주세요.';
  }
  if (!price.digital) {
    errors.price.digital = '원본파일가격을 입력해주세요.';
  }
  return errors;
};

const ConnectedAddProductForm = connect(mapStateToProps, { createProduct })(
  AddProductForm
);

export default reduxForm({ validate: validate, form: 'productCreate' })(
  ConnectedAddProductForm
);
