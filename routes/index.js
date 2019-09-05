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

//router address localhost:4121/demo
//descriptions: Home Page
//comments: show all category
router.get('/demo', async (req, res, next)=> {
  try {
    const categories = await Category.find({});
    console.log(categories)
    res.render('demo/homepage', { categories : categories })
  }
  catch {
    res.redirect('/')
  }
});

//router address localhost:4121/newdemo
//descriptions: Register Demo Page
//comments: show register demo form
router.get('/newdemo', function(req, res, next) {
  res.render('demo/register_demo', { category: new Category() });
});

//router address localhost:behind the scene
//descriptions: Obtain Registered Demo Information
//comments: get all required infromation
router.post('/newdemo', async (req, res, next)=> {
  const category = new Category ({
    category_name: req.body.category_name,
    type_name: req.body.type_name
  })
  try {  
        const newCategory = await category.save()
        res.redirect('/newdemo')
  } catch {
          res.render('demo/register_demo', {
          category: category,
          error: 'Error in Creating Author'
          })
  }
});


module.exports = router;
