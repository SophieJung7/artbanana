const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  displayName: String,
  googleId: String,
  naverId: String,
  firstName: String,
  lastName: String,
  picture: String,
  age: String,
  birthday: String,
  userAccountProvider: String
});

userSchema.plugin(passportLocalMongoose);
mongoose.model('users', userSchema);
