module.exports = function(grunt) {
	_ = require("underscore");

	var target = grunt.option('target') || 'debug';

	grunt.initConfig({
		prompt: {
			keys: {
				options: {
					questions: [{
							config: "parse.appId",
							type: "input",
							message: "Enter your parse.com Application Id:",
							validate: function(value) {
								return (typeof value === "string" && value.length > 0);
							}
						}, {
							config: "parse.masterKey",
							type: "input",
							message: "Enter your parse.com Master Key:",
							validate: function(value) {
								return (typeof value === "string" && value.length > 0);
							}
						}, {
							config: "parse.javascriptKey",
							type: "input",
							message: "Enter your parse.com Javascript Key:",
							validate: function(value) {
								return (typeof value === "string" && value.length > 0);
							}
						}
					]
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-prompt');

	grunt.registerTask('install', [
			'prompt:keys',
			'install-keys'
	]);

	grunt.registerTask('install-keys', 'Installing...', function() {
		
		var appConfig = {
			"parse": {
				"applicationId": grunt.config('parse.appId'),
				"javascriptKey": grunt.config('parse.javascriptKey'),
				"restKey": "",
				"masterKey": grunt.config('parse.masterKey'),
				"clientKey": ""
			}
		};

		var cloudConfig = {
			"applications": {
				"_default": {
					"link": "tripping-cyril"
				},
				"tripping-cyril": {
					"applicationId": grunt.config('parse.appId'),
					"masterKey": grunt.config('parse.masterKey')
				}
			},
			"global": {
				"parseVersion": "1.2.8"
			}
		};

		var done = this.async();
	    var fs = require('fs');
		fs.writeFile('config/config.json', JSON.stringify(appConfig), function(err) {
			if (err) throw err;

			fs.writeFile('config/global.json', JSON.stringify(cloudConfig), function(err) {
				if (err) throw err;
				console.log("Key files installed");
				done();
			});
		});

	});

	grunt.registerMultiTask('keysCopy', 'Compile keys.', function() {
		var done = this.async();
		var fs = require('fs');

		var thisData = this.data;

		fs.readFile(thisData.src, 'utf8', function(err, data) {
			if (err) {
				grunt.log.writeln(err);
				done(false);
			}
			var variables = grunt.config("keys")[target];
			variables = _und.extend(variables, grunt.config("pkg"));

			var options = {
				data: variables
			};

			fs.writeFile(thisData.dest, grunt.template.process(data, options), function(err) {
				if (err) {
					grunt.log.writeln(err);
					done(false);
				}
				done();
			});
		});
	});
};