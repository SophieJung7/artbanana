const mongoose = require('mongoose');
const { Schema } = mongoose;

const photographerSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  email: String,
  fullName: String,
  profileImageUrl: String,
  workArea: String,
  address: String,
  dateRegistered: Date,
});

mongoose.model('photographers', photographerSchema);
