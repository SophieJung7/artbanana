const express = require('express');
const app = express();

//Passport 
require('./services/passport');

//Routes
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);

