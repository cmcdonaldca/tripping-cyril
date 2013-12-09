#Tripping Cyril
==============

A simple node.js app that attempts to duplicate parse.com problems experienced by FoKo. The repo name is meaningless.

## Requirements

	* grunt-cli: make sure you have the grunt-cli installed: http://gruntjs.org

## Setup

Once you clone this repo, run the following commands within the cloned folder:

	> make install

This will ask you for your Parse Keys.  Have them handy so you can copy and paste them into the prompt.  The values of these keys are copied into json files in the config folder.  You can run "grunt install" to install different keys.

## Run

Once everything is installed successfully, you can run the test by calling:

	> make test

This will run through all the tests.  The test suite is all that is in the Tripping Cyril app.  You will want to run and rerun the test command to see the -1 failures as reported here:

	https://parse.com/questions/anyone-else-experiencing-many-timeouts-and-1s-today