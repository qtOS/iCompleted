var express = require('express');
var router = express.Router();

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Memoir = require('../models/Writing');

/* GET /writing  listing. */
router.get('/writing', function(req, res, next) {
  console.log(req.body);
  Memoir.find(function (err, memoir) {
    if (err) return next(err);
    res.json(memoir);
    console.log('found poetry');
  });
});

/* POST /writing */
router.post('/writing', function(req, res, next) {
  Memoir.create(req.body, function (err, memoir) {
    if (err) return next(err);
    res.json(memoir);
    console.log(memoir.createdAt);
  });
});

/* GET /writing/id */
// http://localhost:*/writing/5566a21e1e3a211aa1c63495
router.get('/writing/:id', function(req, res, next) {
  Memoir.findById(req.params.id, function (err, memoir) {
    if (err) return next(err);
    res.json(memoir);
  });
});

/* PUT /writing/:id */
router.put('/writing/:id', function(req, res, next) {
  console.log('putting');
  console.log(req.body);
  Memoir.findByIdAndUpdate(req.params.id, req.body, function (err, memoir) {
    if (err) return next(err);
    res.json(memoir);
    console.log(memoir.updatedAt);
  });
});

/* PATCH /writing/:id */
router.patch('/writing/:id', function(req, res, next) {
  console.log('patching')
  console.log(req.body);
  Memoir.findByIdAndUpdate(req.params.id, req.body, function (err, memoir) {
    if (err) return next(err);
    res.json(memoir);
    console.log(memoir.updatedAt);
  });
});

/* DELETE /writing/:id */
router.delete('/writing/:id', function(req, res, next) {
  console.log(req.body);
  Memoir.findByIdAndRemove(req.params.id, req.body, function (err, memoir) {
    if (err) return next(err);
    res.json(memoir);
  });
});

module.exports = router;
