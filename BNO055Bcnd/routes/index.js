var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'doodler' });
});
router.get('/pixi', function(req, res, next) {
  res.render('pixi', { title: 'pixi' });
});
router.get('/ygame', function(req, res, next) {
  res.render('ygame', { title: 'pixi' });
});
router.get('/ytube',function(req,res,next){
  res.render('youtube',{title:'Vplayer'});
});
module.exports = router;
