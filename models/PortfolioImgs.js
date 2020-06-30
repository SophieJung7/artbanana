const mongoose = require('mongoose');
const { Schema } = mongoose;

const portfolioImgsSchema = new Schema({
  key: String,
});

module.exports = portfolioImgsSchema;
