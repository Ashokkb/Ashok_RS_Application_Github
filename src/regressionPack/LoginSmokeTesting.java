package regressionPack;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

import configurations.config;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utility.mydriver;

public class LoginSmokeTesting extends utility.mydriver {
	
@Given("^Open the Browser and start RS application$")
public void open_the_Browser_and_start_RS_application() throws Throwable {
   mydriver.selectbrowser();
   driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
   driver.manage().window().maximize();
   driver.get(config.url.url);
}

@When("^enter \"([^\"]*)\" and \"([^\"]*)\"$")
public void enter_and(String username, String password) throws Throwable {
	driver.findElement(pages.loginPage.loginlink).click();
	driver.findElement(pages.loginPage.uname).sendKeys(username);
	driver.findElement(pages.loginPage.pword).sendKeys(password);
	
}

@Then("^user should login successfully$")
public void user_should_login_successfully() throws Throwable {
	driver.findElement(pages.loginPage.loginBtn).click();
	Assert.assertTrue(driver.getTitle().contentEquals("RS Components | Electronic and Electrical Components"));
	System.out.println("User LoggedIn Successsfully");
}	

@Then("^click on Logout Button$")
public void click_on_Logout_Button() throws Throwable {
	Assert.assertEquals(driver.getTitle(),"RS Components | Electronic and Electrical Components");
	driver.findElement(pages.loginHomePage.logout).click();
	driver.close();
}
}
