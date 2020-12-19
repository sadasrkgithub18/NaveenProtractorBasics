exports.config = 
{
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['TestSelect.js'],

  onPrepare: function() {
    browser.driver.manage().window().maximize();
   
  }
  
 
};