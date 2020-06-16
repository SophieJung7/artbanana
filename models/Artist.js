const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductImgsSchema = require('./ProductImgs');

const artistSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  email: String,
  profileImageUrl: String,
  name: String,
  address: String,
  productImgs: [ProductImgsSchema],
});

mongoose.model('Artist', artistSchema);
