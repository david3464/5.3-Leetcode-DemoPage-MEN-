var express = require('express');
var router = express.Router();

// app.use('/category', categoryRouter);

//router address localhost:4121/category/:category_name/:type_name
//descriptions: Show Specific Category
//comments:demo all the question belong to this category
router.get('/:category_name/:type_name', function(req, res, next) {
  res.render('question/question_list');
});

//router address localhost:4121/category
//descriptions: Demo All Category
//comments: show all category and search function for specific category
router.get('/', async (req, res, next)=> {
  var searchOptions = {}
  if (req.query.category_name != null && req.query.category_name !== '') {
    searchOptions.category_name = new RegExp(req.query.category_name, 'i')
  }
  try {
    console.log(searchOptions)
    const categories = await Category.find(searchOptions);
    // console.log(categories)
    res.render('category/homepage', { 
      categories : categories, 
      searchOptions : req.query
    })
  }
  catch {
    res.redirect('/')
  }
});

//router address localhost:4121/newdemo
//descriptions: Register Demo Page
//comments: show register demo form
router.get('/new', function(req, res, next) {
  res.render('category/register_type', { category: new Category() });
});


//router address localhost:behind the scene
//descriptions: Obtain Registered Demo Information
//comments: get all required infromation
router.post('/new', async (req, res, next)=> {
  const category = new Category ({
    category_name: req.body.category_name,
    type_name: req.body.type_name
  })
  try {  
        const newCategory = await category.save()
        res.redirect('/category')
  } catch {
          res.render('category/register_type', {
          category: category,
          error: 'Error in Creating Author'
          })
  }
});


module.exports = router;
