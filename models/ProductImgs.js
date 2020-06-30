const mongoose = require('mongoose');
const { Schema } = mongoose;

const productImgsSchema = new Schema({
  key: String,
});

module.exports = productImgsSchema;
