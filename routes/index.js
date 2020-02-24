var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.found){
    res.render('index', { title: req.session.age + " " + req.session.gender })
  }
  else{
    res.render('index', { title: '알 수 없는' })
  };
});





module.exports = router;
