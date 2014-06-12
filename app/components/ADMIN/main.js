/*

Author: Ashwath, Shankar

A routing file to route API belonging to a particular module.
2nd level routing happens via a scheduler

*/

var scheduler = require('../scheduler.js')
exports.version = "X.Y.Z";


exports.processQuery = function(param)
{	
	param['api'] = './ADMIN/' + param['api'] + '.js';
	//API population and scheduling
	scheduler.schedule(param, processedQueryRes);
};

function processedQueryRes(r)
{
    //called after scheduled
	//console.log(r);
};