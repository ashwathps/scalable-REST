/*
Author: Ashwath Shankar
Initial version
*/

var async = require('async');

exports.version = "X.Y.Z";

/*
async.queue to queue up all the tasks.
*/
var qu = async.queue(function(params, callback){
		try{
            /*			
                Command pattern.
            
                `cmd.executeQuery(request, response)`
            */
			var command = require(params['api']);
			command.executeQuery(params['request'], params['response']);
			callback();
		}catch(ex)
		{
			//callback(ex);
		}
		
	}, 200);

/*
Schedules the task by pushing the required parameters into the async.queue
*/
exports.schedule = function(params, callback)
{	
	//q.drain();
	qu.push(params, callback);
};