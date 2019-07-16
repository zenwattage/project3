var express = require('express');
var router = express.Router();
const passport = require('../passport');


router.post('/signup', (req, res, next) => {

    // Custom Passport Callback
    //passing json back into object
    //first(takes callback) second(takesrequestobject)
    passport.authenticate('local-signup', function(error, user, info) {

      if (error) {
        return res.status(500).json({
          message: 'Oops, something happened',
          error: error.message || 'Internal Server Error'
        });
      }

       return res.json({
        message: 'User is now Authenticated!',
      });

    })(req, res, next);
});

router.post('/signin', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
