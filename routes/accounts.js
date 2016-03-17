var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Models = require('../models/Account');
var router = express.Router();

passport.use(new LocalStrategy(Models.Account.authenticate()));
passport.serializeUser(Models.Account.serializeUser());
passport.deserializeUser(Models.Account.deserializeUser());

router.get('/', function(req, res, next) {
  console.log('rendering');
  res.render('account', { user: req.user });
  console.log('render complete');
});

//retrieving saved things
// router.get('/savesearch', function(req, res, next) {
//   res.render('savesearch');
// });

router.post('/login', passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    console.log('login success');
    res.redirect('/');
  }
);

router.post('/register', function(req, res){
  console.log('hit registeration');
  var checkUsername = checkLength(req.body.username, 16);
  var checkEmail = checkLength(req.body.email, 50);
  var checkPassword = checkLength(req.body.password, 16);
  console.log('ping2')
  // if (checkUsername == false || checkEmail == false || checkPassword == false) {
  //   return res.redirect('/');
  //   console.log('returned false');
  // }
  console.log('passed check');
  Models.Account.register(new Models.Account({
      username: req.body.username,
      email: req.body.email
    }),
    req.body.password,
    function(err, account) {
      if (err) {
        return res.render('/', { account: account });
        // message to require registering
      }
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
        console.log('made it this far');
      });
    }
  );
  console.log('passed Models.Account.register');
});

var checkLength = function(inputToCheck, maxLength) {
  if (inputToCheck.length < 5 || inputToCheck.length > maxLength) {
    return false;
  } else {
    return true;
  }
};

//saving action
// router.post('/savemap', function(req, res){
//
//   Models.User.findOneAndUpdate({
//       'username': req.user.username
//     },
//     {
//     }, function(err, User) {
//       if (err) console.log(err);
//       User.map.push(mapDetails);
//       User.save();
//     }
//   )
//   //res.redirect('/');
// });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
  console.log('user logged out')
});


module.exports = router;
