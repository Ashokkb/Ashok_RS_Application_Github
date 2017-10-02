Feature: Testing Login Sanity Scenario

Scenario Outline:Login to the application
Given Open the Browser and start RS application
When enter "<username>" and "<password>"
Then user should login successfully
Then click on Logout Button

Examples: 

    |username  	|password|
    |mike11_2017|12345678| 
    |munesh51		|12345678|
    |munesh67		|12345678|
    
    