describe("Local Stress", function() {
	var assert = require('chai').assert
	var Config = require("../config/config.json");
	var Utils = require('../utils.js').Utils;
	var Parse = require('parse').Parse;

	var app = new Parse.initialize(Config.parse.applicationId, Config.parse.javascriptKey, Config.parse.masterKey);

	// create a new Profile object
	var Profile = Parse.Object.extend("Profile");
	var profile = new Profile();

	/**
	 *
	 * Login the Parse User before this suite runs
	 *
	 **/
	before(function(done) {
		var promises = [];
		profile.set("firstName", "Colin");
		promises.push(profile.save());
		Utils.promiseDone(Parse.Promise.when(promises), done);
	});


	/**
	 *
	 * Stress Test the initSession Cloud function
	 *
	 **/
	describe('fetch', function() {


		// the stress test for this test case
		var stress = function(max, done) {

			var promises = [];

			for (var i = 0; i < max; i++) {
				var p = new Profile();
				p.id = profile.id;
				promises.push(p.fetch());
			};

			Utils.promiseDone(Parse.Promise.when(promises), done);
		};

		it('should succeed when 1', function(done) {

			stress(1, done);

		});

		it('should succeed when 5', function(done) {

			stress(5, done);

		});

		it('should succeed when 10', function(done) {

			stress(10, done);

		});

		it('should succeed when 15', function(done) {

			stress(15, done);

		});

		it('should succeed when 20', function(done) {

			stress(20, done);

		});


		it('should succeed when 25', function(done) {

			stress(25, done);

		});


		it('should succeed when 30', function(done) {

			stress(30, done);

		});

		it('should succeed when 50', function(done) {

			stress(50, done);

		});

		it('should succeed when 75', function(done) {

			stress(75, done);

		});

		it('should succeed when 100', function(done) {

			stress(100, done);

		});
		it.skip('should succeed when 500', function(done) {

			stress(500, done);

		});
		it.skip('should succeed when 1000', function(done) {

			stress(1000, done);

		});

	});

	/**
	 *
	 * Stress Test the initSession Cloud function
	 *
	 **/
	describe('find', function() {

		var stress = function(max, done) {

			var promises = [];

			for (var i = 0; i < max; i++) {
				var q = new Parse.Query(Profile);
				promises.push(q.find());
			};

			Utils.promiseDone(Parse.Promise.when(promises), done);
		};

		it('should succeed when 1', function(done) {

			stress(1, done);

		});

		it('should succeed when 5', function(done) {

			stress(5, done);

		});

		it('should succeed when 10', function(done) {

			stress(10, done);

		});

		it('should succeed when 15', function(done) {

			stress(15, done);

		});

		it('should succeed when 20', function(done) {

			stress(20, done);

		});


		it('should succeed when 25', function(done) {

			stress(25, done);

		});


		it('should succeed when 30', function(done) {

			stress(30, done);

		});

		it('should succeed when 50', function(done) {

			stress(50, done);

		});

		it('should succeed when 75', function(done) {

			stress(75, done);

		});

		it('should succeed when 100', function(done) {

			stress(100, done);

		});
		it.skip('should succeed when 500', function(done) {

			stress(500, done);

		});
		it.skip('should succeed when 1000', function(done) {

			stress(1000, done);

		});
	})
})