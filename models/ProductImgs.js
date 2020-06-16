const mongoose = require('mongoose');
const { Schema } = mongoose;

const productImgsSchema = new Schema({
  key: String,
  url: String,
});

module.exports = productImgsSchema;
