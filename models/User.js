const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    naverId: String,
    firstName: String,
    lastName: String,
    displayName: String,
    email: String,
    picture: String,
    age: String,
    birthday: String,
    userAccountProvider: String
});

mongoose.model('users', userSchema);
