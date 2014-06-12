
exports.version = "X.Y.Z";

exports.apiname = "ADMIN_API";

//Command Pattern realization happens here.
exports.executeQuery = function(req, res)
{
    
	console.log('Executing ' + exports.apiname + ' API \n');
    
    //Your code
    
    
	res.end('Success');
}