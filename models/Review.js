const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  email: String,
  score: Number,
  review: String,
});

module.exports = reviewSchema;
