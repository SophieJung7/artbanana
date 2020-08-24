const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductImgsSchema = require('./ProductImgs');

const productSchema = new Schema({
  artistId: { type: Schema.Types.ObjectId, ref: 'Artist' },
  productCategory: String,
  name: String,
  medium: String,
  description: String,
  year: String,
  quantity: Number,
  size: {
    sm: {
      width: { type: Number },
      height: { type: Number },
    },
    md: {
      width: { type: Number },
      height: { type: Number },
    },
    lg: {
      width: { type: Number },
      height: { type: Number },
    },
    xl: {
      width: { type: Number },
      height: { type: Number },
    },
  },
  price: {
    sm: { type: Number },
    md: { type: Number },
    lg: { type: Number },
    xl: { type: Number },
  },
  productImgs: [ProductImgsSchema],
  dateRegistered: String,
});

mongoose.model('Product', productSchema);
