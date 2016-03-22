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
  res.render('account', { user: req.user, email: req.email });
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
  Models.Account.register(new Models.Account({
      username: req.body.username,
      email: req.body.email
    }),
    req.body.password,
    function(err, account) {
      if (err) {
        console.log('38');
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


router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
  console.log('user logged out')
});


module.exports = router;
