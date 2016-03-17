var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');

//var Account = require("../models/Account")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

module.exports = router;
