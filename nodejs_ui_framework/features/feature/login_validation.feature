Feature: Scenario to validate negative Login functionality of Opencart


    Scenario: Validate title of home page opencart website
    Given I open browser
    When I launch  opencart website
    Then Verify title of Home Page of opencart

    Scenario: Validate the error message for invalid userid and password
    Given I open new browser and again launch opencart website
    When I select on Login button
    When I enter invalid username and password and select to Login buton
    Then Error msg to be displayed
    Then Close the browser

    
