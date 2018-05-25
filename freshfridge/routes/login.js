let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'FreshFridge: Login', subtitle: 'Save food and save money.' });
});

module.exports = router;
