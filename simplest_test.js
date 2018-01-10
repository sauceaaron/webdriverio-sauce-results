var webdriverio = require('webdriverio');

var user = process.env.SAUCE_USERNAME;
var key = process.env.SAUCE_ACCESS_KEY;

var sauce_url = `${user}:${key}@ondemand.saucelabs.com`;
var test_results_url = "https://saucelabs.com/beta/tests/sessionId";

var options = { 
	desiredCapabilities : {
		platform: 'Windows 10', 
		browserName : 'chrome',
		version: 'latest',
		name: 'simplest test'
	},

	protocol: 'https',
	host: sauce_url,
	port: 443,
	path: '/wd/hub'

};

var browser = webdriverio.remote(options);

browser
	.init()
	.url('http://saucelabs.com')
	.getTitle()
		.then(function(title) {
			console.log('got title: ', title);
		})
	.session()
		.then(function(session) {
			var sessionId = session.sessionId;
			console.log('got session id: ', sessionId);
			console.log('test results url: ', test_results_url.replace('sessionId', sessionId));
			console.log('full capabilities: ', session.value)
		})
	.end();
