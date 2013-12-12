// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.configure(function(){
	app.use(express.bodyParser());
});

app.get('/1/dropdata', function(req, res) {
	console.log(req.body);
	res.send("okay");
	
});

app.get('/', function(req,res) {
	res.send("Hello World!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});