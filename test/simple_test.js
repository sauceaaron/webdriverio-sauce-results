
browser.timeouts('script', 60000);
browser.timeouts('pageLoad', 60000);

var test_results_url = "https://saucelabs.com/beta/tests/sessionId";

describe('simple test', function() {
	
	it('should load a web page', function() {

		browser.url('http://saucelabs.com');
		var title = browser.getTitle();

		console.log('\ntest Name: ', this.test.fullTitle());
		console.log('got title: ', title);

		console.log('desiredCapabilities: ', JSON.stringify(browser.desiredCapabilities));

		var sessionId = browser.session().sessionId;
		console.log('session:', sessionId);
		console.log('test results url: ', test_results_url.replace('sessionId', sessionId));



	})
})