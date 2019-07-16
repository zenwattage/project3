const passport = require('passport');

//bring in strategy, configure it, then export it
//import all the strategies
//const GoogleStrategy = require('./GoogleStrategy');

const SignupStrategy = require('./SignupStrategy');
const SigninStrategy = require('./SigninStrategy');


passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;