var Profile = Parse.Object.extend("Profile");

Parse.Cloud.define("testFetch", function(request, response){
	var profile = new Profile();
	profile.id = request.params.id;
	profile.fetch().then(function(p){
		response.success(p);
	}, function(p, error){
		console.log('here');
		console.log(error);
		response.error(error);
	});

});

Parse.Cloud.define("testFind", function(request, response){
	var q = new Parse.Query(Profile);
	q.find().then(function(results){
		response.success("Found this many results: " + results.length);
	}, function(error){
		console.log(error);
		response.error(error);
	});
});