var express = require('express');
var router = express.Router();

// app.use('/category', categoryRouter);

//router address localhost:3000/category/:category_name/:type_name
//descriptions: Show Specific Category
//comments:demo all the question belong to this category
router.get('/:category_name/:type_name', function(req, res, next) {
  res.render('about');
});

module.exports = router;
