var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

// driver.get('http://www.wingify.com')
// .then(function(){
//   driver.click('button.filled-shadow.blue');
// });


describe('basic test', function () {
	it('should be on correct page', function () {
		driver.get('http://www.wingify.com');
		// driver.getTitle().then(function(title) {
		// 	expect(title).toBe('Wingify');
    //   done();
		// });
    expect(driver.getTitle()).toBe('Wingify');
	});
});
