$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Login Sanity Scenario",
  "description": "",
  "id": "testing-login-sanity-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login to the application",
  "description": "",
  "id": "testing-login-sanity-scenario;login-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Browser and start RS application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should login successfully",
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Browser and start RS application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter \"mike11_2017\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSmokeTesting.open_the_Browser_and_start_RS_application()"
});
formatter.result({
  "duration": 719488331,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Ashok\\Softwares\\IEDriverServer_x64_2.53.1\\IEDriverServer.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:534)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:131)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriverService.access$000(InternetExplorerDriverService.java:32)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriverService$Builder.findDefaultExecutable(InternetExplorerDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:329)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.setupService(InternetExplorerDriver.java:273)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:195)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:152)\r\n\tat utilities.mydriver.selectbrowser(mydriver.java:28)\r\n\tat regressionPack.loginSmokeTesting.open_the_Browser_and_start_RS_application(loginSmokeTesting.java:14)\r\n\tat ✽.Given Open the Browser and start RS application(login.feature:5)\r\n",
  "status": "failed"
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
  "location": "loginSmokeTesting.enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginSmokeTesting.user_should_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
});