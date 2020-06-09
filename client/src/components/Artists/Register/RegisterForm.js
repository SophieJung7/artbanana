import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import RegisterFormField from './RegisterFormField';
import Breadcrumb from '../../Common/Breadcrumb';
import FIELDS from './RegisterFields';

class Register extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, size, placeholder }) => {
      return (
        <Field
          type='text'
          component={RegisterFormField}
          key={name}
          name={name}
          styleName={name}
          label={label}
          size={size}
          placeholder={placeholder}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb title='아티스트 등록' />

        {/*Regsiter section*/}
        <section className='register-page section-b-space'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h3>아트바나나 아티스트 등록하기</h3>
                <div className='theme-card'>
                  <form
                    onSubmit={this.props.handleSubmit(
                      this.props.onReviewSubmit
                    )}
                    className='theme-form'
                  >
                    {this.renderFields()}
                    <Link to='/' className='btn btn-solid mr-5'>
                      취소하기
                    </Link>
                    <button className='btn btn-solid btn-review'>
                      작성내용 확인하기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'artistForm',
  destroyOnUnmount: false,
})(Register);
