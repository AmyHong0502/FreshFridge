var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('My page. Respond with a resource.');
});

router.get('/fridge', function(req, res, next) {
  res.send('fridge page. Respond with a resource.');
});

router.get('/shopping-list', function(req, res, next) {
  res.send('shopping-list page. Respond with a resource.');
});

module.exports = router;
