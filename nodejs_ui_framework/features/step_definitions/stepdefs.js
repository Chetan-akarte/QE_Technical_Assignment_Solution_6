const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I open browser', function () {
  var windowHandle = browser.windowHandle();
  browser.windowHandleMaximize('{'+windowHandle.value+'}');
  console.log('I open browser');
});

When('I launch  opencart website', function () {
  browser.url('/');
  console.log('I launch  opencart website');
});

Then('Verify title of Home Page of opencart', function () {
  var title = browser.getTitle();
  console.log('Tile of Home Page - '+title);
  expect(title).to.equal('Your Store');
  console.log('Succesfully Verifed title of Home Page of opencart');
});

Given('I open new browser and again launch opencart website', function () {
  browser.url('https://demo.opencart.com/');
  var windowHandle = browser.windowHandle();
  browser.windowHandleMaximize('{'+windowHandle.value+'}');
  console.log('I open new browser and again launch opencart websit');
});

When('I select on Login button', function () {
  browser.click('a.dropdown-toggle span.hidden-xs');
  browser.click('=Login');
  console.log('I select on Login button');
});

When('I enter invalid username and password and select to Login buton', function () {
  browser.setValue('input#input-email', 'test@test.com');
  browser.setValue('input#input-password', 'testpass');
  browser.click('input[type="submit"]');
  console.log('I enter invalid username and password and select to Login buton');
});

Then('Error msg to be displayed', function () {
  let text = browser.getText('div.alert');
  console.log(text);
  expect(text).to.equal('Warning: No match for E-Mail Address and/or Password.');
  console.log('Error msg to be displayed');
});

Then('Close the browser', function () {
  /*  
    Code need to be implement..
    but currently wdio is closing browser.
  */
  console.log('Close the browser');
});



