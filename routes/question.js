var express = require('express');
var router = express.Router();
Category = require('../models/Category');
Question = require('../models/Question');
// app.use('/question', questionRouter);


//router address localhost:4121/question/
//descriptions: Demo Question
//comments: show all question and search function for specific question
router.get('/', async (req, res, next)=> { 
    let query = Question.find().sort({number:'asc'})
    if (req.query.title != null && req.query.title !== '') {
        query = query.regex('title', new RegExp(req.query.title), 'i')
    }
    if (req.query.number != null && req.query.number !== '') {
        query = query.lte('number', req.query.number)
    }
    if (req.query.number != null && req.query.number !== '') {
        query = query.gte('number', req.query.number)
    }
    try{
        // console.log(query)
        let questions = await query.exec();
        // console.log(questions)
        res.render('question/question_list', { 
          questions : questions,
          searchOptions : req.query
        })
    }
    catch(err) {
        console.log('err during during 4121/question/ '+err);
    }

});

//router address localhost:4121/question/new
//descriptions: Register New Question
//comments: show register question form
router.get('/new', async (req, res, next)=> {
    try {
        let categories = await Category.find({})
        let question = new Question()
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
    let question = new Question ({
        title: req.body.title,
        number: req.body.number,
        type: req.body.type,
        description: req.body.description
    })
    // console.log(question)
    let categories = await Category.find({})
    try {  
        const newQuestion = await question.save()
        
        res.redirect('/question')
    }
    catch(err){
                console.log('err during during 4121/question/new bts '+err);
                res.render('question/register_question', {
                categories: categories,
                question: question,
                error: 'Error in Creating New Question'
                })
    }
});

//router address localhost:4121/question/:id
//descriptions: Show Detail Question Information
//comments: Show detail information of a Question
router.get('/:id', (req, res)=> {
    res.send('Show question' + req.params.id)
})

//router address localhost:4121/question/:id
//descriptions: Show Detail Question Information
//comments: Show detail information of a Question
router.get('/:id/edit', async (req, res)=> {
    try {
        console.log(req.params.id)
        let question = await Question.findById(req.params.id)
        console.log(question.type)
        let category  = await Category.findById(question.type)
        console.log(category.type_name)
        res.render('question/edit_question', { question: question,  category:category });
    } catch(err) {
                    console.log('err during during 4121/question/:id/edit '+err);
                    res.redirect('/question')
    }
})

//router address localhost:4121/question/:id
//descriptions: Show Detail Question Information
//comments: Show detail information of a Question
router.put('/:id', (req, res)=> {
    res.send('Update question' + req.params.id)
})

//router address localhost:4121/question/:id
//descriptions: Show Detail Question Information
//comments: Show detail information of a Question
router.delete('/:id', (req, res)=> {
    res.send('delete question' + req.params.id)
})

module.exports = router;