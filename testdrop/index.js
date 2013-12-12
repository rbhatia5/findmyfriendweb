var request = require('request');

request(
	{ 
		method: 'POST', 
		uri: 'http://shielded-woodland-9592.herokuapp.com/dropdata',
		json: {foo: 'bar', test: { a: 'A', b: 'B'}}
	},
	function (error, response, body) {
			 if(response.statusCode == 200){
		        console.log('success')
				console.log(body);
		      } 
			  else {
		        console.log('error: '+ response.statusCode)
		        console.log(body)
		      }
	}
			
	
);
