TESTS = test/*.js
REPORTER = spec
MOCHA = ./node_modules/mocha/bin/mocha

test:
	$(MOCHA) \
			--reporter $(REPORTER) \
			--timeout 60000 \
			--bail \
			$(TESTS)

cloud:
		parse deploy
install:
		npm install
		grunt install
		parse deploy

.PHONY: test cloud clean