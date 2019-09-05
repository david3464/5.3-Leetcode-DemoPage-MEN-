var express = require('express');
var router = express.Router();
Category = require('../models/Category');
// app.use('/', indexRouter);

//router address localhost:4121/
//descriptions: Index Page
//comments:
router.get('/', function(req, res, next) {
  res.render('index',{ layout: 'hero_layout' });
});

//router address localhost:4121/about
//descriptions: Test Page
//comments:for testing purpose
router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
