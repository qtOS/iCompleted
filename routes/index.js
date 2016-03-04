var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  Goal.find(function (err, goals) {
    if (err) return next(err);
    res.json(goals);
    console.log('found a goal');
  });
});

module.exports = router;
