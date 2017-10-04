$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AllProductsSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Use AllProducts Search and Purchase Item",
  "description": "",
  "id": "use-allproducts-search-and-purchase-item",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the Browser and start RS application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter \"munesh51\" and \"12345678\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSmokeTesting.open_the_Browser_and_start_RS_application()"
});
formatter.result({
  "duration": 9699167755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munesh51",
      "offset": 7
    },
    {
      "val": "12345678",
      "offset": 22
    }
  ],
  "location": "LoginSmokeTesting.enter_and(String,String)"
});
formatter.result({
  "duration": 3773857642,
  "status": "passed"
});
formatter.match({
  "location": "LoginSmokeTesting.user_should_login_successfully()"
});
formatter.result({
  "duration": 2471141280,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Purchase the Item",
  "description": "",
  "id": "use-allproducts-search-and-purchase-item;purchase-the-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Item is searched in AllProducts",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on special offers in product details",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Buy the product",
  "keyword": "Then "
});
formatter.match({
  "location": "AllProductSearch.item_is_searched_in_AllProducts()"
});
formatter.result({
  "duration": 4730919360,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductPage.click_on_special_offers_in_product_details()"
});
formatter.result({
  "duration": 13945881455,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductPage.buy_the_product()"
});
formatter.result({
  "duration": 15205051879,
  "status": "passed"
});
formatter.uri("SearchPurchaseProduct.feature");
formatter.feature({
  "line": 2,
  "name": "Searching a product",
  "description": "",
  "id": "searching-a-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@featureTest"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open the Browser and start RS application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter \"munesh51\" and \"12345678\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSmokeTesting.open_the_Browser_and_start_RS_application()"
});
formatter.result({
  "duration": 8413977188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munesh51",
      "offset": 7
    },
    {
      "val": "12345678",
      "offset": 22
    }
  ],
  "location": "LoginSmokeTesting.enter_and(String,String)"
});
formatter.result({
  "duration": 4388237140,
  "status": "passed"
});
formatter.match({
  "location": "LoginSmokeTesting.user_should_login_successfully()"
});
formatter.result({
  "duration": 2711219519,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "",
  "description": "",
  "id": "searching-a-product;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "enter a product details in search",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "search product details page displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "purchase the product",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPurchaseProduct.enter_a_product_details_in_search()"
});
formatter.result({
  "duration": 4689760427,
  "status": "passed"
});
formatter.match({
  "location": "SearchPurchaseProduct.search_product_details_page_displayed()"
});
formatter.result({
  "duration": 8749684412,
  "status": "passed"
});
formatter.match({
  "location": "SearchPurchaseProduct.purchase_the_product()"
});
formatter.result({
  "duration": 17221460716,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Login Sanity Scenario",
  "description": "",
  "id": "testing-login-sanity-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to the application",
  "description": "",
  "id": "testing-login-sanity-scenario;login-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the Browser and start RS application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on Logout Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "testing-login-sanity-scenario;login-to-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "testing-login-sanity-scenario;login-to-the-application;;1"
    },
    {
      "cells": [
        "mike11_2017",
        "12345678"
      ],
      "line": 12,
      "id": "testing-login-sanity-scenario;login-to-the-application;;2"
    },
    {
      "cells": [
        "munesh51",
        "12345678"
      ],
      "line": 13,
      "id": "testing-login-sanity-scenario;login-to-the-application;;3"
    },
    {
      "cells": [
        "munesh67",
        "12345678"
      ],
      "line": 14,
      "id": "testing-login-sanity-scenario;login-to-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login to the application",
  "description": "",
  "id": "testing-login-sanity-scenario;login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the Browser and start RS application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter \"mike11_2017\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSmokeTesting.open_the_Browser_and_start_RS_application()"
});
formatter.result({
  "duration": 10434333435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mike11_2017",
      "offset": 7
    },
    {
      "val": "12345678",
      "offset": 25
    }
  ],
  "location": "LoginSmokeTesting.enter_and(String,String)"
});
formatter.result({
  "duration": 3644111856,
  "status": "passed"
});
formatter.match({
  "location": "LoginSmokeTesting.user_should_login_successfully()"
});
formatter.result({
  "duration": 2257036146,
  "status": "passed"
});
formatter.match({
  "location": "LoginSmokeTesting.click_on_Logout_Button()"
});
formatter.result({
  "duration": 4628775504,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to the application",
  "description": "",
  "id": "testing-login-sanity-scenario;login-to-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the Browser and start RS application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter \"munesh51\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSmokeTesting.open_the_Browser_and_start_RS_application()"
});
formatter.result({
  "duration": 8654248286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munesh51",
      "offset": 7
    },
    {
      "val": "12345678",
      "offset": 22
    }
  ],
  "location": "LoginSmokeTesting.enter_and(String,String)"
});
formatter.result({
  "duration": 4082940916,
  "status": "passed"
});
formatter.match({
  "location": "LoginSmokeTesting.user_should_login_successfully()"
});
formatter.result({
  "duration": 2116783180,
  "status": "passed"
});
formatter.match({
  "location": "LoginSmokeTesting.click_on_Logout_Button()"
});
formatter.result({
  "duration": 3878202485,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to the application",
  "description": "",
  "id": "testing-login-sanity-scenario;login-to-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the Browser and start RS application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter \"munesh67\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSmokeTesting.open_the_Browser_and_start_RS_application()"
});
formatter.result({
  "duration": 8378271334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munesh67",
      "offset": 7
    },
    {
      "val": "12345678",
      "offset": 22
    }
  ],
  "location": "LoginSmokeTesting.enter_and(String,String)"
});
formatter.result({
  "duration": 4758792403,
  "status": "passed"
});
formatter.match({
  "location": "LoginSmokeTesting.user_should_login_successfully()"
});
formatter.result({
  "duration": 1972844084,
  "status": "passed"
});
formatter.match({
  "location": "LoginSmokeTesting.click_on_Logout_Button()"
});
formatter.result({
  "duration": 4077747834,
  "status": "passed"
});
formatter.uri("userRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration page",
  "description": "",
  "id": "user-registration-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "New User Registration",
  "description": "",
  "id": "user-registration-page;new-user-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Access RS application and click on Register button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters all valid details and clicks on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user registers successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserRegistration.access_RS_application_and_click_on_Register_button()"
});
formatter.result({
  "duration": 13917919466,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.user_enters_all_valid_details_and_clicks_on_Register_button()"
});
formatter.result({
  "duration": 2011839661,
  "status": "passed"
});
formatter.match({
  "location": "UserRegistration.user_registers_successfully()"
});
formatter.result({
  "duration": 6177644948,
  "status": "passed"
});
});