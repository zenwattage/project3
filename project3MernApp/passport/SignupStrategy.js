const Strategy = require('passport-local').Strategy;
const User = require('../models/user');

const SignupStrategy = new Strategy(function(username, password, done) {
  const user = username;
  //what should be happening once user is signing up
});

module.exports = SignupStrategy;