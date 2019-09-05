var express = require('express');
var router = express.Router();

// app.use('/question', questionRouter);

//router address localhost:3000/question/new
//descriptions: Register New Question
//comments: show register demo form
router.get('/new', function(req, res, next) {
    res.render('question/register_demo', { question: new Question() });
  });

module.exports = router;