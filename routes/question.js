var express = require('express');
var router = express.Router();

// app.use('/question', questionRouter);


//router address localhost:4121/question/new
//descriptions: Register New Question
//comments: show register demo form
router.get('/', function(req, res, next) {
    res.render('question/question_list');
});

//router address localhost:4121/question/new
//descriptions: Register New Question
//comments: show register demo form
router.get('/new', function(req, res, next) {
    res.render('question/register_question');
});

module.exports = router;