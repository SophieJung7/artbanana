const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

const userSchema = new Schema({
  email: String,
  username: String,
  artist: { type: Boolean, default: false },
  artistId: { type: Schema.Types.ObjectId, ref: 'Artist' },
  emailValidated: { type: Boolean, default: false },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  password: String,
  displayName: String,
  googleId: String,
  naverId: String,
  firstName: String,
  lastName: String,
  picture: String,
  age: String,
  birthday: String,
  userAccountProvider: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordExpires = Date.now() + 3600000;
};

mongoose.model('User', userSchema);
