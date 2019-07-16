
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const passport = require('./passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 8080;
const log = console.log;

const app = express();


mongoose.connect('mongodb://localhost/authentication-example', {useNewUrlParser: true});


//app.set('PORT', process.env.PORT || 8080);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/authentication', usersRouter);

app.use(passport.initialize());
//app.use(passport.session());


app.listen(PORT, () => {
  log('Server listening on PORT ${PORT}');
});


module.exports = app;


