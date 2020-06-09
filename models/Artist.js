const mongoose = require('mongoose');
const { Schema } = mongoose;

const artistSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  address: String,
});

mongoose.model('Artist', artistSchema);
