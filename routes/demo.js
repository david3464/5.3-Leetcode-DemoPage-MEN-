var express = require('express');
var router = express.Router();

//router address localhost:4121/demo/07 (Two Sum)
//descriptions: Demo Specific Question Information
//comments: Detail this question and show animation in HTML
router.get('/1', async (req, res, next)=>{
  try {
  let question = await Question.find({number:'1'});
  // console.log(question);
  console.log(question[0].title);
  res.render('demo/07Reverse_Integer',{question : question});
  } catch(err) {
    console.log('err during during 4121/demo/01 (Two Sum) '+err);
  }
});

//router address localhost:4121/demo/07 (Reverse Integer)
//descriptions: Demo Specific Question Information
//comments: Detail this question and show animation in HTML
router.get('/7', async (req, res, next)=>{
  try {
  let question = await Question.find({number:'7'});
  // console.log(question);
  console.log(question[0].title);
  res.render('demo/01Two_Sum',{question : question});
  } catch(err) {
    console.log('err during during 4121/demo/07 (Reverse Integer) '+err);
  }
});

//router address localhost:4121/demo/09 (Parlindrome Number)
//descriptions: Demo Specific Question Information
//comments: Detail this question and show animation in HTML
router.get('/9', async (req, res, next)=>{
  try {
  let question = await Question.find({number:'9'});
  // console.log(question);
  console.log(question[0].title);
  res.render('demo/07Reverse_Integer',{question : question});
  } catch(err) {
    console.log('err during during 4121/demo/07 (Reverse Integer) '+err);
  }
});







module.exports = router;