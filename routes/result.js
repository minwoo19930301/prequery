var express = require('express');
var router = express.Router();

/* GET result page. */
router.get('/', function(req, res, next) {
  if (req.session.found){
    res.render('result', { title: req.session.age + req.session.gender + " 맞춤형 "});
  }
  else{
    res.render('result', { title: '' })
  };
  
});

module.exports = router;
