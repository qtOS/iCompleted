var express = require('express');
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    hbs = require('hbs'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');
    //uncomment this later for session and user building
    // methodOverride = require('method-override'),
    // session = require('express-session'),
    // passport = require('passport'),
    // LocalStrategy = require('passport-local'),
    // TwitterStrategy = require('passport-twitter'),
    // GoogleStrategy = require('passport-google'),
    // FacebookStrategy = require('passport-facebook');

var routes = require('./routes/index');
var users = require('./routes/users');

//passport beginnings
// var config = require('./config.js'), //config file contains all tokens and other private info
//     funct = require('./functions.js'); //funct file contains our helper functions for our Passport and database work
//~~~~~~~ continue with this later ^^^^^
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
