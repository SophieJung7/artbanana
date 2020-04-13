import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { IoIosArrowBack } from 'react-icons/io';

class ProFormReview extends Component {
  reviewFields() {
    const { formValues } = this.props;
    return (
      <div>
        <div class="form-group">
          <label>이름</label>
          <p>{formValues.name}</p>
        </div>
        <div class="form-group">
          <label>자기소개 및 홍보</label>
          <p>{formValues.name}</p>
        </div>
        <div class="form-group">
          <label>기타사항</label>
          <p>{formValues.etc ? formValues.etc : null}</p>
        </div>
        <label for="career">경력사항</label>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="companyName">회사명</label>
            <p>
              {formValues.company1 ? formValues.company1.companyName1 : null}
            </p>
          </div>
          <div class="form-group col-md-2">
            <label for="deaprtment">부서</label>
            <p>{formValues.company1 ? formValues.company1.deparment1 : null}</p>
          </div>
          <div class="form-group col-md-4">
            <label for="job">직책 및 업무기술</label>
            <p>{formValues.company1 ? formValues.company1.job1 : null}</p>
          </div>
          <div class="form-group col-md-2">
            <label for="dates">날짜</label>
            <p>
              {formValues.company1 ? formValues.company1.companyDates1 : null}
            </p>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="companyName">회사명</label>
            <p>
              {formValues.company2 ? formValues.company2.companyName2 : null}
            </p>
          </div>
          <div class="form-group col-md-2">
            <label for="deaprtment">부서</label>
            <p>{formValues.company2 ? formValues.company2.deparment2 : null}</p>
          </div>
          <div class="form-group col-md-4">
            <label for="job">직책 및 업무기술</label>
            <p>{formValues.company2 ? formValues.company2.job2 : null}</p>
          </div>
          <div class="form-group col-md-2">
            <label for="dates">날짜</label>
            <p>
              {formValues.company2 ? formValues.company2.companyDates2 : null}
            </p>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="companyName">회사명</label>
            <p>
              {formValues.company3 ? formValues.company3.companyName3 : null}
            </p>
          </div>
          <div class="form-group col-md-2">
            <label for="deaprtment">부서</label>
            <p>{formValues.company3 ? formValues.company3.deparment3 : null}</p>
          </div>
          <div class="form-group col-md-4">
            <label for="job">직책 및 업무기술</label>
            <p>{formValues.company3 ? formValues.company3.job3 : null}</p>
          </div>
          <div class="form-group col-md-2">
            <label for="dates">날짜</label>
            <p>
              {formValues.company3 ? formValues.company3.companyDates3 : null}
            </p>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="companyName">회사명</label>
            <p>
              {formValues.company4 ? formValues.company4.companyName4 : null}
            </p>
          </div>
          <div class="form-group col-md-2">
            <label for="deaprtment">부서</label>
            <p>{formValues.company4 ? formValues.company4.deparment4 : null}</p>
          </div>
          <div class="form-group col-md-4">
            <label for="job">직책 및 업무기술</label>
            <p>{formValues.company4 ? formValues.company4.job4 : null}</p>
          </div>
          <div class="form-group col-md-2">
            <label for="dates">날짜</label>
            <p>
              {formValues.company4 ? formValues.company4.companyDates4 : null}
            </p>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="companyName">학교명</label>
            <p>
              {formValues.education1 ? formValues.education1.schoolName1 : null}
            </p>
          </div>
          <div class="form-group col-md-4">
            <label for="deaprtment">전공</label>
            <p>{formValues.education1 ? formValues.education1.major1 : null}</p>
          </div>
          <div class="form-group col-md-2">
            <label for="job">날짜</label>
            <p>
              {formValues.education1
                ? formValues.education1.schoolDates1
                : null}
            </p>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="companyName">학교명</label>
            <p>
              {formValues.education2 ? formValues.education2.schoolName2 : null}
            </p>
          </div>
          <div class="form-group col-md-4">
            <label for="deaprtment">전공</label>
            <p>{formValues.education2 ? formValues.education2.major2 : null}</p>
          </div>
          <div class="form-group col-md-2">
            <label for="job">날짜</label>
            <p>
              {formValues.education2
                ? formValues.education2.schoolDates2
                : null}
            </p>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="companyName">학교명</label>
            <p>
              {formValues.education3 ? formValues.education3.schoolName3 : null}
            </p>
          </div>
          <div class="form-group col-md-4">
            <label for="deaprtment">전공</label>
            <p>{formValues.education3 ? formValues.education3.major3 : null}</p>
          </div>
          <div class="form-group col-md-2">
            <label for="job">날짜</label>
            <p>
              {formValues.education3
                ? formValues.education3.schoolDates3
                : null}
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { onCancel, submitPro, formValues } = this.props;

    return (
      <div className="container">
        <div className="mt-5">
          <h5>작성한 내용을 확인해주세요.</h5>
          {this.reviewFields()}

          <div className="d-flex justify-content-between mt-5">
            <button onClick={onCancel} className="btn btn-dark rounded-0 px-5">
              <IoIosArrowBack /> 수정하기
            </button>
            <button
              onClick={() => submitPro(formValues)}
              className="btn btn-primary rounded-0 px-5"
            >
              인터뷰온 프로 지원하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const submitPro, onCancel

function mapStateToProps(state) {
  return { formValues: state.form.proForm.values };
}

export default connect(mapStateToProps, actions)(ProFormReview);
