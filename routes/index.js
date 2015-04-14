var express = require('express');
var router = express.Router();
var DjBlurbModel = require('../database/db.js');



router.get('/', function(req, res) {

	res.render('index')	

});


router.get('/djlist', function(req, res){

	var list = DjBlurbModel.returnall();

	res.render('djlist', {
		djlist: DjBlurbModel.returnall()
	});

});

module.exports = router;
