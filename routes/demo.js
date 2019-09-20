var express = require('express');
var router = express.Router();

//router address localhost:4121/demo/07 (Reverse Integer)
//descriptions: Demo Specific Question Information
//comments: Detail this question and show animation in HTML
router.get('/7', function(req, res, next) {
  res.render('demo/07Reverse_Integer');
});







module.exports = router;