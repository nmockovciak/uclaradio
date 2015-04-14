var express = require('express');
var router = express.Router();
var DjBlurbModel = require('../database/db.js');
var request = require('request');
var mongoose = require('mongoose');
var DJ = mongoose.model('DjBlurb');

router.get('/', function(req, res) {

	res.render('index')	

});


router.get('/djlist', function(req, res){
	DJ.find({}).lean().exec(function(err,djblurbs){
		var arr = Object.keys(djblurbs).map(function(k) { return djblurbs[k] });
		console.log(arr);
		res.render('djlist', {
			djlist: arr
		})
	});
});

module.exports = router;
