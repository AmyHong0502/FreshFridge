var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreshFridge', subtitle: 'Save food and save money.' });
});

module.exports = router;
