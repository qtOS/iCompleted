var express = require('express');
var router = express.Router();

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Goal = require('../models/Goals');

/* GET /api/Goals listing. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  Goal.find(function (err, goals) {
    if (err) return next(err);
    res.json(goals);
    console.log('found a goal');
  });
});

/* POST /goals */
router.post('/', function(req, res, next) {
  console.log(req.body);
  Goal.create(req.body, function (err, goal) {
    if (err) return next(err);
    res.json(goal);
  });
});

/* GET /goals/id */
// http://localhost:4000/goals/5566a21e1e3a211aa1c63495
router.get('/:id', function(req, res, next) {
  Goal.findById(req.params.id, function (err, goal) {
    if (err) return next(err);
    res.json(goal);
  });
});

/* PUT /Goals/:id */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Goal.findByIdAndUpdate(req.params.id, req.body, function (err, goal) {
    if (err) return next(err);
    res.json(goal);
  });
});

/* PATCH /Goals/:id */
router.patch('/:id', function(req, res, next) {
  console.log(req.body);
  Goal.findByIdAndUpdate(req.params.id, req.body, function (err, goal) {
    if (err) return next(err);
    res.json(goal);
  });
});

/* DELETE /Goals/:id */
router.delete('/:id', function(req, res, next) {
  console.log(req.body);
  Goal.findByIdAndRemove(req.params.id, req.body, function (err, goal) {
    if (err) return next(err);
    res.json(goal);
  });
});

module.exports = router;
