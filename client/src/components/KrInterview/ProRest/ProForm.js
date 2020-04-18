import React, { Component } from 'react';
import { reduxForm, Field, Fields } from 'redux-form';
import _ from 'lodash';
import FormOneField from './FormOneField';
import FormEducationFields from './FormEducationFields';
import FormExperiencesFields from './FormExperiencesFields';

const proContents = [
  { label: '이름', name: 'name' },
  { label: '자기소개 및 홍보', name: 'intro' },
  { label: '기타 사항', name: 'etc' },
];

class ProForm extends Component {
  renderContents() {
    return _.map(proContents, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          component={FormOneField}
          type="text"
        />
      );
    });
  }

  renderExperiences() {
    return (
      <Fields
        names={[
          'company1.companyName1',
          'company1.department1',
          'company1.job1',
          'company1.companyDates1',
          'company2.companyName2',
          'company2.department2',
          'company2.job2',
          'company2.companyDates2',
          'company3.companyName3',
          'company3.department3',
          'company3.job3',
          'company3.companyDates3',
          'company4.companyName4',
          'company4.department4',
          'company4.job4',
          'company4.companyDates4',
        ]}
        component={FormExperiencesFields}
        type="text"
      />
    );
  }

  renderEducation() {
    return (
      <Fields
        names={[
          'education1.schoolName1',
          'education1.major1',
          'education1.schoolDates1',
          'education2.schoolName2',
          'education2.major2',
          'education2.schoolDates2',
          'education3.schoolName3',
          'education3.major3',
          'education3.schoolDates3',
        ]}
        component={FormEducationFields}
        type="text"
      />
    );
  }

  render() {
    return (
      <div className="container my-5">
        <form
          onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}
        >
          {this.renderContents()}
          {this.renderExperiences()}
          {this.renderEducation()}
          <button type="submit" class="btn btn-primary">
            작성한 내용 확인하기
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'proForm', destroyOnUnmount: false })(ProForm);
