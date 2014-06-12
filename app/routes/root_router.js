/*
Author: Ashwath, Shankar
*/

var enm = require('express-namespace'),
    admin_handler = require("../components/ADMIN/main.js"),
    user_handler = require("../components/USER/main.js");

exports.version = 'X.Y.Z';

exports.handle_allincoming_requests = function(express)
{
	console.log("Incoming REST API \n");
	/*
		Hierarchial routing using express-namespace.
	*/
	express.namespace('/admin', function(){
		express.get('/\??', function(req, res){
			admin_handler.processQuery({ api: 'ADMIN_API', request: req , response: res });
		});
    });
    
     express.namespace('/user\??', function(){
        express.get('/\??', function(req, res){
           res.end("Give a user name");
        });
        express.get('/:uname\??', function(req, res){
           user_handler.processQuery({ api: 'USER_NAME_API', request: req, response: res }) ;
        });
         express.get('/:uname/:age\??', function(req, res){
           user_handler.processQuery({ api: 'USER_API', request: req, response: res }) ;
        });
    });
    //extend further into modules
};
