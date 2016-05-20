var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('http://www.wingify.com').then(function(){
  // driver.click('class=button.filled-shadow.blue');
});
