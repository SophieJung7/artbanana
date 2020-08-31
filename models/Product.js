const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductImgsSchema = require('./ProductImgs');

const productSchema = new Schema({
  artistId: { type: Schema.Types.ObjectId, ref: 'Artist' },
  artistProfile: String,
  artistName: String,
  productCategory: String,
  name: String,
  medium: String,
  description: String,
  year: String,
  quantity: Number,
  price: {
    sm: { type: Number },
    md: { type: Number },
    lg: { type: Number },
    xl: { type: Number },
    digital: { type: Number },
  },
  productImgs: [ProductImgsSchema],
  dateRegistered: String,
});

mongoose.model('Product', productSchema);
