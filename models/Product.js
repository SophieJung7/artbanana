const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  key: String,
  name: String,
  medium: String,
  year: String,
  width: Number,
  height: Number,
  quantity: Number,
  price: Number,
});

module.exports = productSchema;
