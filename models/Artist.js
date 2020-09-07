const mongoose = require('mongoose');
const { Schema } = mongoose;
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
  SNS: {
    homepage: String,
    insta: String,
    etc: String,
  },
  profileImg: String,
  portfolioImgs: [PortfolioImgsSchema],
  reviews: [ReviewSchema],
});

mongoose.model('Artist', artistSchema);
