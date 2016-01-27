// link to the connect package
var connect = require('connect');

var url = require('url');

// create a new app using connect
var app = connect();

var calculatorMath = function(req, res, next) {
    // get the subtotal from url's querystring
    var qs = url.parse(req.url, true).query;
    //Setting up the variables to make caluculator work
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;
    var result
   
    //Setting up the math
    if (qs.method == 'add') {
        method = '+';
    }else if (qs.method == 'subtract') {
		method = '-';
	}
	else if (qs.method == 'multiply') {
		method = '*';
	}
	else if (qs.method == 'divide') {
		method = '/';
	}
	//Error will pop up if there is not valid method
	else {
		method = 'Error';
	}
    
    if (method === '+') {
       result = parseFloat(x) + parseFloat(y);
    } else if (method === '*') {
        result = parseFloat(x) * parseFloat(y);
    } else if (method === '/') {
        result = parseFloat(x) / parseFloat(y);
    } else if (method === '-'){ 
        result = parseFloat(x) - parseFloat(y);
    } else {
        //if there is invalid value for method
        result = "Error 404 try other valid value";
    }
    
    res.writeHead(200, {
        "Content-Type": "text-plain"
    });

    // display results
    res.write('16 ' + method + ' 4 = ' + result);

    res.end();
};

// route each url to proper function 
app.use('/calculator', calculatorMath);

//listen for events
app.listen(3000);
console.log('Connect app running at http://localhost:3000');