var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');

//var Account = require("../models/Account")

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('landing-page', {
    title: 'AKQT',
    anotherThing: 'WHOOP WHOOP'
  });
});
//blog
router.get('/blog', function(req, res, next) {
  res.render('index', { user: req.user, name: req.email, title: 'Subject+Thought'});
});
router.get('/about', function(req, res, next){
  res.render('about', {
    author: "Aaron Krueger",
    age: "21",
    linkedInProfile: "https://www.linkedin.com/in/cssshaman",
    //change this url later
    imgUrl: "public/images/name.png",
    githubUrl: "https://github.com/y04nqt",
    title: 'About me'
  });
})

module.exports = router;
