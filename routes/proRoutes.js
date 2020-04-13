const passport = require('passport');
const mongoose = require('mongoose');
const Pro = mongoose.model('pros');

module.exports = (app) => {
  app.post('/api/pros', async (req, res) => {
    const {
      name,
      intro,
      etc,
      company1,
      company2,
      company3,
      company4,
      education1,
      education2,
      education3,
    } = req.body;
    const pro = new Pro({
      name: name,
      intro: intro,
      etc: etc,
      experiences: [
        {
          companyName: company1 ? company1.companyName1 : null,
          department: company1 ? company1.department1 : null,
          job: company1 ? company1.job1 : null,
          companyDates: company1 ? company1.companyDates1 : null,
        },
        {
          companyName: company2 ? company2.companyName2 : null,
          department: company2 ? company2.department2 : null,
          job: company2 ? company2.job2 : null,
          companyDates: company2 ? company2.companyDates2 : null,
        },
        {
          companyName: company3 ? company3.companyName3 : null,
          department: company3 ? company3.department3 : null,
          job: company3 ? company3.job3 : null,
          companyDates: company3 ? company3.companyDates3 : null,
        },
        {
          companyName: company4 ? company4.companyName4 : null,
          department: company4 ? company4.department4 : null,
          job: company4 ? company4.job4 : null,
          companyDates: company4 ? company4.companyDates4 : null,
        },
      ],
      education: [
        {
          schoolName: education1 ? education1.schoolName1 : null,
          major: education1 ? education1.major1 : null,
          schoolDates: education1 ? education1.schoolDates1 : null,
        },
        {
          schoolName: education2 ? education2.schoolName2 : null,
          major: education2 ? education2.major2 : null,
          schoolDates: education2 ? education2.schoolDates2 : null,
        },
        {
          schoolName: education3 ? education3.schoolName3 : null,
          major: education3 ? education3.major3 : null,
          schoolDates: education3 ? education3.schoolDates3 : null,
        },
      ],
    });
    try {
      await pro.save();
      res.send('SUCCESS!');
    } catch {
      res.status(422).send(err);
    }
  });
};
