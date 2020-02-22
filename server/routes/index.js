var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('q', req.body.q);
  
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
  console.log('b', req.body.b);
  
  res.render('index', { title: 'Express' });
});



module.exports = router;
