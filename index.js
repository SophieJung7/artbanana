const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');

//Mongoose --> Don't change the order. userSchema should be called before passport.js.
require('./models/User');
mongoose.connect(keys.mongoURI);

//Passport 
require('./services/passport');

//Routes
require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);

