import React from 'react';

            
const FormFourFields = (fields) => {
  return (
    <div>
      <label for='career'>경력사항</label>
      <div class='form-row' >
        <div class='form-group col-md-4'>
            <label for='companyName'>회사명</label>
          <input {...fields.company1.companyName1.input} type='text' class='form-control' id='inputCity' />
        </div>
        <div class='form-group col-md-2'>
          <label for='deaprtment'>부서</label>
          <input {...fields.company1.department1.input} type='text' class='form-control' id='inputCity' />
        </div>
        <div class='form-group col-md-4'>
          <label for='job'>직책 및 업무기술</label>
          <input {...fields.company1.job1.input} type='text' class='form-control' id='inputZip' />
        </div>
        <div class='form-group col-md-2'>
          <label for='dates'>날짜</label>
          <input {...fields.company1.companyDates1.input} type='text' class='form-control' id='inputZip' />
        </div>
          </div>
          <div class='form-row' >
        <div class='form-group col-md-4'>
            <label for='companyName'>회사명</label>
          <input {...fields.company2.companyName2.input} type='text' class='form-control' id='inputCity' />
        </div>
        <div class='form-group col-md-2'>
          <label for='deaprtment'>부서</label>
          <input {...fields.company2.department2.input} type='text' class='form-control' id='inputCity' />
        </div>
        <div class='form-group col-md-4'>
          <label for='job'>직책 및 업무기술</label>
          <input {...fields.company2.job2.input} type='text' class='form-control' id='inputZip' />
        </div>
        <div class='form-group col-md-2'>
          <label for='dates'>날짜</label>
          <input {...fields.company2.companyDates2.input} type='text' class='form-control' id='inputZip' />
        </div>
          </div>
          <div class='form-row' >
        <div class='form-group col-md-4'>
            <label for='companyName'>회사명</label>
          <input {...fields.company3.companyName3.input} type='text' class='form-control' id='inputCity' />
        </div>
        <div class='form-group col-md-2'>
          <label for='deaprtment'>부서</label>
          <input {...fields.company3.department3.input} type='text' class='form-control' id='inputCity' />
        </div>
        <div class='form-group col-md-4'>
          <label for='job'>직책 및 업무기술</label>
          <input {...fields.company3.job3.input} type='text' class='form-control' id='inputZip' />
        </div>
        <div class='form-group col-md-2'>
          <label for='dates'>날짜</label>
          <input {...fields.company3.companyDates3.input} type='text' class='form-control' id='inputZip' />
        </div>
          </div>
          <div class='form-row' >
        <div class='form-group col-md-4'>
            <label for='companyName'>회사명</label>
          <input {...fields.company4.companyName4.input} type='text' class='form-control' id='inputCity' />
        </div>
        <div class='form-group col-md-2'>
          <label for='deaprtment'>부서</label>
          <input {...fields.company4.department4.input} type='text' class='form-control' id='inputCity' />
        </div>
        <div class='form-group col-md-4'>
          <label for='job'>직책 및 업무기술</label>
          <input {...fields.company4.job4.input} type='text' class='form-control' id='inputZip' />
        </div>
        <div class='form-group col-md-2'>
          <label for='dates'>날짜</label>
          <input {...fields.company4.companyDates4.input} type='text' class='form-control' id='inputZip' />
        </div>
      </div>
    </div>
  );
};

export default FormFourFields;
