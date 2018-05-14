var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('login', {title: 'FreshFridge', subtitle: 'Save food and save money.'});
});

module.exports = router;
