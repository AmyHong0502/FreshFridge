let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'FreshFridge', subtitle: 'Save food and save money.', apidata: ''});
});

router.post('/', function (req, res) {
    res.send("POST: not implemented");
});

module.exports = router;
