/**
 * Little library to help the testing framework with Parse.Promise objects 
 **/

(function(root) {
	
	var Utils = {};
	exports.Utils = Utils;

	var _ = require("underscore")._;


	//
	// Take a Promise and call done on error/succes
	// Additional, output any error information
	//
	Utils.promiseDone = function(promise, done) {
		promise.then(function() {
			done();
		}, function(error) {
			if (_.isArray(error)) {
				console.log("Multiple Errors");
				_.each(error, function(err){
					if (err)
						console.log(err);

				});
			} else {
				console.log('error:', error);
			}

			throw error;

			done(JSON.stringify(error));
		});
	};

}).call(this);