exports.version = "X.Y.Z";

exports.apiname = "USER_NAME_API";

//Command Pattern realization happens here.
exports.executeQuery = function(req, res)
{
    
	console.log('Executing ' + exports.apiname + ' API \n');
    
    //Your code

	res.end('USER : '+ req.params['uname']);
}