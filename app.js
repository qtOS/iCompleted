var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    hbs = require('hbs'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    //uncomment this later for session and user building
    // methodOverride = require('method-override'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
    // TwitterStrategy = require('passport-twitter'),
    // GoogleStrategy = require('passport-google'),
    // FacebookStrategy = require('passport-facebook');

require('./db/Database');

var routes = require('./routes/index');
var goals = require('./routes/goals');
var accounts = require('./routes/accounts');

var app = express();

app.use(require('express-session')({
  secret: 'A- A- Roon',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

var Models = require('./models/Account');
passport.use(new LocalStrategy(Models.Account.authenticate()));
passport.serializeUser(Models.Account.serializeUser());
passport.deserializeUser(Models.Account.deserializeUser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
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
app.use('/goals', goals);
app.use('/account', accounts);


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
