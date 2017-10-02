@featureTest
Feature: Searching a product

Background:
Given Open the Browser and start RS application
When enter "munesh51" and "12345678"
Then user should login successfully

Scenario:
When enter a product details in search
Then search product details page displayed
Then purchase the product
	
