const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

//db();

app.use(
  express.urlencoded({ extended: true })
);
// app.use(express.json());


//import or use express router 
app.use('/', require('./routes/index'));


app.listen(port, function (err) {
  if (err) {
    console.log('error', err);
  }

  console.log(`Server is running on port: ${port}`);
});