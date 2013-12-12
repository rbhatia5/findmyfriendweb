// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

/*var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

mongo.Db.connect(mongoUri, function(err, db) {
	db.collection('mydocs',function(er, collection) {
		collection.insert({'mykey':'myvalue'}, {safe: true}, function(er,rs){
			
		});
	});
});*/


app.use(logfmt.requestLogger());

app.configure(function(){
	app.use(express.bodyParser());
});

app.put('/1/dropdata', function(req, res) {
	console.log(req.body);
	res.send("okay");
	
});

app.get('/1/pulldata' , function(req, res) {
	console.log(req.body);
	res.send("grabbing data");
});

app.get('/', function(req,res) {
	res.send("Hello World!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
