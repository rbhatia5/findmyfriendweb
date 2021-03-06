// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var data = {foo: 'bar'};



app.use(logfmt.requestLogger());

app.configure(function(){
	app.use(express.bodyParser());
});

app.post('/dropdata', function(req, res) {
	console.log(req.body);
	data = req.body;
	res.send(req.body);
	
});

app.get('/pulldata' , function(req, res) {
	console.log(req.body);
	res.send(data);
});

app.get('/', function(req,res) {
	res.send("Hello World!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
