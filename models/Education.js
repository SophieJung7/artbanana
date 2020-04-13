const mongoose = require('mongoose');
const { Schema } = mongoose;

const educationSchema = new Schema({
  schoolName: String,
  major: String,
  schoolDates: String,
});

module.exports = educationSchema;
