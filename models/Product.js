const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductImgsSchema = require('./ProductImgs');

const productSchema = new Schema({
  artistId: { type: Schema.Types.ObjectId, ref: 'Artist' },
  productCategory: String,
  refImg: String,
  name: String,
  medium: String,
  year: String,
  quantity: Number,
  size: {
    sm: {
      width: Number,
      height: Number,
    },
    md: {
      width: Number,
      height: Number,
    },
    lg: {
      width: Number,
      height: Number,
    },
    xl: {
      width: Number,
      height: Number,
    },
  },
  price: {
    sm: { type: Number },
    md: { type: Number },
    lg: { type: Number },
    xl: { type: Number },
  },
  productImgs: [ProductImgsSchema],
});

mongoose.model('Product', productSchema);
