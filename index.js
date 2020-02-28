const express = require('express');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const flash = require('connect-flash');
const keys = require('./config/keys');

//Connecting Mongoose --> Don't change the order. userSchema should be called before passport.js.
require('./models/User');
mongoose.connect(keys.mongoURI);

//Connect bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting Passport
require('./services/passport');
//Flash connection always should be after Passport configuration.
app.use(flash());

//Enabling Cookies
app.use(
  cookieSession({
    //Cookie lasts for 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
