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

// const options = {
//     errorMessages: {
//         MissingPasswordError: 'No password was given',
//         AttemptTooSoonError: 'Account is currently locked. Try again later',
//         TooManyAttemptsError: 'Account locked due to too many failed login attempts',
//         NoSaltValueStoredError: 'Authentication not possible. No salt value stored',
//         IncorrectPasswordError: 'Password or username are incorrect',
//         IncorrectUsernameError: 'Password or username are incorrect',
//         MissingUsernameError: 'No username was given',
//         UserExistsError: 'A user with the given username is already registered'
//     }
// };

userSchema.plugin(passportLocalMongoose);
mongoose.model('users', userSchema);


