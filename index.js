const express = require('express');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const requestLanguage = require('express-request-language');
const keys = require('./config/keys');

//Connecting Mongoose --> Don't change the order. userSchema should be called before passport.js.
require('./models/User.js');
require('./models/Artist.js');
mongoose.connect(keys.mongoURI);

//Connect bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting Passport
require('./services/passport');

//Set up cookies for Authentication
app.use(
  cookieSession({
    //Cookie lasts for 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Be able to read cookie
app.use(cookieParser());

//Set up cookies for language.
app.use(
  requestLanguage({
    languages: ['ko', 'en'],
    cookie: {
      name: 'language',
      options: { maxAge: 365 * 24 * 3600 * 1000 },
    },
  })
);

//Routes
require('./routes/authRoutes')(app);
require('./routes/photoUploadRoutes')(app);
require('./routes/artistRoutes')(app);

// if (['production', 'ci'].includes(process.env.NODE_ENV)) {
//   app.use(express.static('client/build'));

//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve('client', 'build', 'index.html'));
//   });
// }

//NODE_ENV comes from Heroku setup
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file, or main.css!
  app.use(express.static('client/build'));
  // Express will serve up the index.html file if it doesn't recognize the route!
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
