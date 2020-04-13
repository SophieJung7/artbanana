const mongoose = require('mongoose');
const { Schema } = mongoose;
const experienceSchema = require('./Experience');
const educationSchema = require('./Education');

const proSchema = new Schema({
  name: String,
  intro: String,
  etc: String,
  experiences: [experienceSchema],
  education: [educationSchema],
});

mongoose.model('pros', proSchema);
