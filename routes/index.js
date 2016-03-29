var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');

//var Account = require("../models/Account")

var basicInfo = {
      author: "Aaron Krueger",
      age: "XXI",
      profession: "Fullstack Engineer",
      expertise: "User Interface & Interaction",
      githubUrl: "https://github.com/y04nqt",
      linkedInProfile: "https://www.linkedin.com/in/cssshaman",
      imgUrl: "./images/profile.png",
      devStatement: "Digital technology is defining our lives by recording our actions daily. Whether we know it or not, our lives are being analysed by hundreds of algorithms that directly affect us. It is my mission to use data effectively and efficiently to deliver a solution to the user for their benefit. I believe it all begins with the user needing a solution to a problem they don't realize they have. These problems lead to outstanding solutions for others and creates effective outcomes."
    },
    portfolioLinks = {
      runningM8: {
        name: "RunningM8",
        description: "A Ruby/Sinatra application with a homemade user interface and design. This app is meant for a user who is training for a marathon to track their miles ran and keep them on track with their goal. It has two levels, novice and intermediate. The user then inputs the miles ran each day and the app will update the calendar as time passes. It includes data validation, custom animation, and full user interface.",
        link: "http://104.236.214.136/"
      },
      chitownCrimeAnalytics: {
        name: "Chi-town Crime Analytics",
        description: "Node/express application with users and api calls including CRUD functionality. The user interface is built from pure precompiled CSS, but needs love.",
        link: "https://github.com/qtOS/chitown-analytics"
      },
      rivusChatApp: {
        name: "Rivus",
        description: "Built from scratch node chat application using socket.io and other technologies to deliver a simple chat-room with input data validation.",
        link: "https://github.com/qtOS/practRivus"
      }
    };

/* GET portfolio */
router.get('/portfolio', function(req, res, next){
  res.render('portfolio', {
    title: 'Portfolio',
    basicInfo: basicInfo,
    portfolioLinks: portfolioLinks
  });
});
//blog
router.get('/blog', function(req, res, next) {
  res.render('index', { user: req.user, name: req.email, title: 'Subject+Thought'});
});
//about
router.get('/', function(req, res, next){
  res.render('about', {
    basicInfo: basicInfo,
    title: 'Aaron Krueger Web Portfolio'
  });
})

module.exports = router;
