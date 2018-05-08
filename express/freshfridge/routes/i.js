var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('i', { title: 'FreshFridge', subtitle: 'Save food and save money.' });
});

router.get('/fridge', function(req, res, next) {
  res.render('fridge', { title: 'FreshFridge', subtitle: 'Save food and save money.' });
});

router.get('/shopping-list', function(req, res, next) {
  res.render('shopping-list', { title: 'FreshFridge', subtitle: 'Save food and save money.' });
});

module.exports = router;
