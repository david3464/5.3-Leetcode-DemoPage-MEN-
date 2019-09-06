var express = require('express');
var router = express.Router();
Category = require('../models/Category');
Question = require('../models/Question');
// app.use('/question', questionRouter);


//router address localhost:4121/question/new
//descriptions: Register New Question
//comments: show all question and search function for specific question
router.get('/', function(req, res, next) {
    res.render('question/question_list');
});

//router address localhost:4121/question/new
//descriptions: Register New Question
//comments: show register question form
router.get('/new', async (req, res, next)=> {
    try {
        const categories = await Category.find({})
        const question = new Question()
        // console.log(categories)
        res.render('question/register_question', { 
            question : question,
            categories : categories
        });
    } 
    catch(err) {
                console.log('err during 4121/question/new '+err);
                res.render('/question')
    }
});

//router address behind the scene
//descriptions: Obtain Registered Question Information
//comments: get all required infromation
router.post('/new', async (req, res, next)=> {        
    const question = new Question ({
        title: req.body.title,
        number: req.body.number,
        type: req.body.type,
        description: req.body.description
    })
    console.log(question)
    const categories = await Category.find({})
    try {  
        const newQuestion = await question.save()
        
        res.redirect('/question')
    }
    catch(err){
                console.log('err during during 4121/question/new create new qustion '+err);
                res.render('question/register_question', {
                categories: categories,
                question: question,
                error: 'Error in Creating New Question'
                })
    }
});

module.exports = router;