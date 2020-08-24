import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { createProduct } from '../../../../actions';
import AddProductFormFields from './AddProductFormFields';
import FORM_FIELDS from './formFields';

class AddProductForm extends Component {
  state = {
    loading: false,
    error: false,
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

  renderFields() {
    // return _.map(FORM_FIELDS)
  }

  render() {
    return (
      <>
        <div className='col-xl-7'>
          <form onSubmit={this.onSubmit}>
            <Field
              name='productCategory'
              label='제품카테고리'
              component={AddProductFormFields}
            />
            <Field
              name='name'
              label='제품명'
              component={AddProductFormFields}
            />
            <Field
              name='medium'
              label='작품소재'
              component={AddProductFormFields}
            />
            <Field
              name='description'
              label='주문제작설명(제작방법, 제품장점 등)'
              component={AddProductFormFields}
            />
            <Field
              name='size.sm.width'
              label='가로길이(cm)'
              component={AddProductFormFields}
            />
            <Field
              name='size.sm.height'
              label='세로길이(cm)'
              component={AddProductFormFields}
            />
            <Field
              name='price.sm'
              label='S사이즈가격'
              component={AddProductFormFields}
            />
            <Field
              name='size.md.width'
              label='가로길이(cm)'
              component={AddProductFormFields}
            />
            <Field
              name='size.md.height'
              label='세로길이(cm)'
              component={AddProductFormFields}
            />
            <Field
              name='price.md'
              label='M사이즈가격'
              component={AddProductFormFields}
            />
            <Field
              name='size.lg.width'
              label='가로길이(cm)'
              component={AddProductFormFields}
            />
            <Field
              name='size.lg.height'
              label='세로길이(cm)'
              component={AddProductFormFields}
            />
            <Field
              name='price.lg'
              label='L사이즈가격'
              component={AddProductFormFields}
            />
            <Field
              name='size.xl.width'
              label='가로길이(cm)'
              component={AddProductFormFields}
            />
            <Field
              name='size.xl.height'
              label='세로길이(cm)'
              component={AddProductFormFields}
            />
            <Field
              name='price.xl'
              label='XL사이즈가격'
              component={AddProductFormFields}
            />
            <div className='offset-xl-3 offset-sm-4'>
              <button type='submit' className='btn btn-primary'>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist, formValues: state.form.productCreate };
};

const ConnectedAddProductForm = connect(mapStateToProps, { createProduct })(
  AddProductForm
);

export default reduxForm({ form: 'productCreate' })(ConnectedAddProductForm);
