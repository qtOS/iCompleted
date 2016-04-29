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
      devStatement: "I am an ambitious zealot of JS and mastermind of CSS. I strive to learn new frameworks consistently and put forward elegantly fast applications. Most of all my styling work is contrived personally without bootstrap or clunky plugins. It is crucial to have beautifully efficient interfaces and interactions for users to enjoy. I make it my goal, no matter the project, to create intuitive layouts and architecture to ease use for all users. First and foremost, focusing on data-driven applications ready for mobile devices using web-based technology. You may download my résumé from the portfolio page by clicking the flashing title."
    },
    portfolioLinks = {
      shoppingMallJapan:{
        name: "Shopping Mall Japan",
        description: "A web-based technology facelift for a dated UI deputy service business site. Currently under reconstruction.",
        link: "http://www.shoppingmalljapan.com/"
      },
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
