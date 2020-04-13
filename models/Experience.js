const mongoose = require('mongoose');
const { Schema } = mongoose;

const experienceSchema = new Schema({
  companyName: String,
  department: String,
  job: String,
  companyDates: String,
});

module.exports = experienceSchema;
