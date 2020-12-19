exports.config = {

  directConnect: true,
  capabilities: {

    'browserName': 'chrome',


  },
  specs: ['handlingAlerts.js'],

  onPrepare: function() {
    browser.driver.manage().window().maximize();
   
  }
  


};