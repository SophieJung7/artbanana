const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductImgsSchema = require('./ProductImgs');
const PortfolioImgsSchema = require('./PortfolioImgs');
const ReviewSchema = require('./Review');

const artistSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  verified: {
    type: Boolean,
    default: false,
  },
  name: String,
  email: String,
  phone: String,
  intro: String,
  SNS: [String],
  productCategory: {
    type: String,
    default: 'pencil',
  },
  price: {
    sm: { type: Number },
    md: { type: Number },
    lg: { type: Number },
    xl: { type: Number },
  },
  profileImg: String,
  productImgs: [ProductImgsSchema],
  portfolioImgs: [PortfolioImgsSchema],
  reviews: [ReviewSchema],
});

mongoose.model('Artist', artistSchema);
