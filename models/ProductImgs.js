const mongoose = require('mongoose');
const { Schema } = mongoose;

const productImgsSchema = new Schema({
  key: String,
  s3FolderId: String,
});

module.exports = productImgsSchema;
