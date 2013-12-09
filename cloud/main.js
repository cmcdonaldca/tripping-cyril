var Profile = Parse.Object.extend("Profile");

Parse.Cloud.define("testFind", function(request, response){
	response.success();
});

Parse.Cloud.define("testFetch", function(request, response){
	response.success();	
});