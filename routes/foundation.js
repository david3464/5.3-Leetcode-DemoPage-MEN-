var express = require('express');
var router = express.Router();

//router address localhost:3000/foundation/arrayandlist
//descriptions: Show all array and list question
//comments:

router.get('/', function(req, res, next) {
  res.render('index',{ layout: 'hero_layout' });
});

module.exports = router;
