
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const passport = require('./passport');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 8080;
const log = console.log;

const cookieSession = require('cookie-session');

const app = express();

mongoose.connect('mongodb://localhost/authentication-example', {useNewUrlParser: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use(passport.initialize());
//add coookie to browser
app.use(passport.session());

app.use('/', indexRouter);
app.use('/authentication', usersRouter);



app.listen(PORT, () => 
  log(`Server listening on PORT ${PORT}`));


module.exports = app;


