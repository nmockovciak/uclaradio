var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index');
});

router.get('/pledgedrive', function(req, res, next) {
	res.render('pledgedrive');
});

module.exports = router;
