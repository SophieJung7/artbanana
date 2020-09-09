import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { editProduct } from '../../../../actions';
import AddProductFormFields from './AddProductFormFields';
import { COMMON_FIELDS } from './formFields';

class EditProductForm extends Component {
  state = {
    loading: false,
    error: false,
    productCategory: '',
  };

  //   onSubmit = async (e) => {
  //     try {
  //       e.preventDefault();
  //       // Show PacmanLoader
  //       this.setState({ loading: true });
  //       const productId = this.props.match.params.id;
  //       const formValues = this.props.formValues.values;
  //       const productImgs = this.props.productImgFiles;
  //       console.log(productImgs);
  //         const allValues = { ...formValues, productImgs: productImgs };
  //         await this.props.editProduct(productId, allValues);
  //         window.location.reload(false);
  //     } catch (err) {
  //       this.setState({ error: true });
  //       this.setState({ loading: false });
  //     }
  //   };

  onSubmit = async (e) => {
    e.preventDefault();
    this.props.onSubmit(this.props.formValues.values);
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
  // Render For Digital Media
  //   renderConditionFields() {
  //     if (
  //       this.state.productCategory === 'illustration' ||
  //       this.state.productCategory === 'photoshop'
  //     ) {
  //       return _.map(CONDITION_FIELDS, ({ label, name, size, placeholder }) => {
  //         return (
  //           <Field
  //             type='text'
  //             component={AddProductFormFields}
  //             key={name}
  //             name={name}
  //             label={label}
  //             size={size}
  //             placeholder={placeholder}
  //           />
  //         );
  //       });
  //     }
  //     return null;
  //   }

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
                    {this.renderFields()}
                    {this.renderConditionFields()}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <button
                      type='submit'
                      className='btn btn-solid p-3'
                      style={{ width: '15vw' }}
                    >
                      제품수정하기
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

const ConnectedAddProductForm = connect(mapStateToProps, { editProduct })(
  EditProductForm
);

export default reduxForm({ validate: validate, form: 'productCreate' })(
  ConnectedAddProductForm
);
