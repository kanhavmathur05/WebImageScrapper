var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submitrequest',function(req, res, next) {
  console.log(req.param.inputValue);
 // res.render('index');
});
module.exports = router;
