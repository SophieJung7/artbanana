const mongoose = require('mongoose');
const { Schema } = mongoose;

const artistSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  email: String,
  profileImageUrl: String,
  name: String,
  address: String,
});

mongoose.model('Artist', artistSchema);
