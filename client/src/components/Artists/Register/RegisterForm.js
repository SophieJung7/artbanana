import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { BsChevronRight } from 'react-icons/bs';
import RegisterFormField from './RegisterFormField';
import Breadcrumb from '../../Common/Breadcrumb';
import FIELDS from './RegisterFields';

class Register extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
        <h3 className='mt-5 text-center'>아트바나나 아티스트 등록하기</h3>
        {/*Regsiter section*/}
        <section className='contact-page section-b-space'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <form
                  onSubmit={this.props.handleSubmit(this.props.onReviewSubmit)}
                  className='theme-form'
                >
                  <div className='form-row mb-5'>{this.renderFields()}</div>
                  <div className='d-flex justify-content-center mb-5'>
                    <Link to='/' className='btn btn-solid mr-5'>
                      취소하기
                    </Link>
                    <button className='btn btn-solid btn-review'>
                      다음 <BsChevronRight style={{ fontSize: '1.5rem' }} />
                    </button>
                  </div>
                </form>
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
    if (!values[name] && noValueError) {
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
