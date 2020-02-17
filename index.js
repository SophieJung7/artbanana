const express = require('express');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

//Connecting Mongoose --> Don't change the order. userSchema should be called before passport.js.
require('./models/User');
mongoose.connect(keys.mongoURI);

//Connect bodyParser
app.use(bodyParser.json());

//Connecting Passport 
require('./services/passport');

//Enabling Cookies 
app.use(cookieSession({
    //Cookie lasts for 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ keys.cookieKey ]
}));
app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
    res.send("hello there");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

