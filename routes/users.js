var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  if(req.body.input === "21호"){
          req.session.found=true;
          req.session.gender = "여성";
          console.log(req.body);
          if(req.body.typeSpeed >= 50){
            req.session.age = "20대";
          }else if(req.body.typeSpeed < 50 && req.body.typeSpeed >=20){
            req.session.age = "30대";
          }else{
            req.session.age = "40대";
          }
  }else if(req.body.input === "23호"){
          req.session.found=true;
          req.session.gender = "남성";
          if(req.body.typeSpeed >= 50){
            req.session.age = "20대";
          }else if(req.body.typeSpeed < 50 && req.body.typeSpeed >=20){
            req.session.age = "30대";
          }else{
            req.session.age = "40대";
          }
  }
  else{
        req.session.destroy();
  }
        res.redirect('/result');
});

module.exports = router;
