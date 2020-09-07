import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User } from 'react-feather';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { editArtist } from '../../../../../actions';
import RegisterFormField from '../../../Register/RegisterFormField';
import FIELDS from '../../../Register/RegisterFields';

export class TabsetProfile extends Component {
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
        <Tabs>
          <TabList className='nav nav-tabs tab-coupon'>
            <Tab className='nav-link'>
              <User className='mr-2' />
              Profile
            </Tab>
          </TabList>

          <TabPanel>
            <section className='contact-page section-b-space'>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-12'>
                    <form
                      onSubmit={this.props.handleSubmit((values) =>
                        this.props.onSubmit(values)
                      )}
                      className='theme-form'
                    >
                      <div className='form-row mb-5'>{this.renderFields()}</div>
                      <div className='d-flex justify-content-center mb-5'>
                        <button
                          type='submit'
                          className='btn btn-solid btn-review px-5'
                        >
                          수정하기
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
        </Tabs>
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
            {this.props.loading ? (
              <h5 className='mb-5' style={{ color: 'red' }}>
                업로드중입니다. 페이지 새로고침을 하지말고 잠깐만
                기다려주세요^^!
              </h5>
            ) : null}

            <PacmanLoader
              size={100}
              color={'#8aad3a'}
              loading={this.props.loading}
            />
          </div>
        </div>
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

const ConnectedTabsetProfile = connect(null, { editArtist })(TabsetProfile);

export default reduxForm({
  validate: validate,
  form: 'artistForm',
})(ConnectedTabsetProfile);
