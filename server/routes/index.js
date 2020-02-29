var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('q', req.query.q);
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  console.log('b', req.body.b);
  res.render('index', { title: 'Express' });
});

module.exports = router;
