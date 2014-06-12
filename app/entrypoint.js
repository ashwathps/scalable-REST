/*


Author: Ashwath Shankar


Copyright 
License: MIT

*/
var express = require('express'),
	 	 __ = require('underscore'),
        qs = require('querystring');

//An express way of routing incoming REST API calls with namespace hierarchy
var router = require(__dirname + '/routes/root_router.js');

var app = express();

var argv_array = process.argv;
var listen_port = 8090; //get it from config

// cmd> node entry_point.js 8090
// commandline arguments

if(argv_array.length > 2 && !__.isNaN(argv_array[2])){
	listen_port = argv_array[2];
}

app.use(express.logger('dev'));

//handle header type text/plain
app.use(function(req, res, next){
   if(req.is('text/*')){
        req.text = '';
        req.setEncoding('utf8');
        req.on('data', function(chk){ req.text += chk; });
        req.on('end', next);
    }else{
        next();
    }
});
app.use(express.bodyParser()); //for PUT/DEL/POST verbs.

//additional header
app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use(function(err, req, res, next){    
    //in a POST request, validate the incoming JSON and bail out if err
	if(err)
    {
        var responseData = {};
        responseData.message = "JSON Payload error";   
        res.write(JSON.stringify(responseData));
        res.end();
    }
    else
    {
        next();
    }
});

app.use(express.responseTime()); //adds header to output giving the response time
router.handle_allincoming_requests(app);

console.log('scalable-REST listening on port ' + listen_port +' \n');
app.listen(listen_port);