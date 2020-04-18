import React from 'react';

const FormFourFields = (fields) => {
  return (
    <div>
      <label for="career">학력사항</label>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="companyName">학교명</label>
          <input
            {...fields.education1.schoolName1.input}
            type="text"
            class="form-control"
            id="inputCity"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="deaprtment">전공</label>
          <input
            {...fields.education1.major1.input}
            type="text"
            class="form-control"
            id="inputCity"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="job">날짜</label>
          <input
            {...fields.education1.schoolDates1.input}
            type="text"
            class="form-control"
            id="inputZip"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="companyName">학교명</label>
          <input
            {...fields.education2.schoolName2.input}
            type="text"
            class="form-control"
            id="inputCity"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="deaprtment">전공</label>
          <input
            {...fields.education2.major2.input}
            type="text"
            class="form-control"
            id="inputCity"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="job">날짜</label>
          <input
            {...fields.education2.schoolDates2.input}
            type="text"
            class="form-control"
            id="inputZip"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="companyName">학교명</label>
          <input
            {...fields.education3.schoolName3.input}
            type="text"
            class="form-control"
            id="inputCity"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="deaprtment">전공</label>
          <input
            {...fields.education3.major3.input}
            type="text"
            class="form-control"
            id="inputCity"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="job">날짜</label>
          <input
            {...fields.education3.schoolDates3.input}
            type="text"
            class="form-control"
            id="inputZip"
          />
        </div>
      </div>
    </div>
  );
};

export default FormFourFields;
