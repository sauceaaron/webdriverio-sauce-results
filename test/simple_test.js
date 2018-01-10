var test_results_url = "https://saucelabs.com/beta/tests/sessionId";

describe('simple test', function() 
{	
	it('should load a web page', function() 
	{

		console.log('\ntest Name: ', this.test.fullTitle());
		console.log('desiredCapabilities: ', JSON.stringify(browser.desiredCapabilities));

		browser.url('http://saucelabs.com');
		var title = browser.getTitle();
		console.log('got title: ', title);
	
		var sessionId = browser.session().sessionId;
		console.log('test results url: ', test_results_url.replace('sessionId', sessionId));	
	});
});