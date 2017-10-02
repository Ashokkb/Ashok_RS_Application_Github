package regressionPack;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import configurations.config;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utility.mydriver;

public class UserRegistration extends utility.mydriver{
	
	@Given("^Access RS application and click on Register button$")
	public void access_RS_application_and_click_on_Register_button() throws Throwable {
		mydriver.selectbrowser();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get(config.url.url);
		driver.findElement(pages.loginPage.registerBtn).click();
	}

	@When("^user enters all valid details and clicks on Register button$")
	public void user_enters_all_valid_details_and_clicks_on_Register_button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		driver.findElement(pages.registerPage.username).sendKeys(config.register.username);
		System.out.println("Username is :" + config.register.username);
		driver.findElement(pages.registerPage.password).sendKeys(config.register.password);
		driver.findElement(pages.registerPage.retypepassword).sendKeys(config.register.retypepassword);
		driver.findElement(pages.registerPage.titleDD).click();
		WebElement titleDDL = driver.findElement(pages.registerPage.titleDD);
		selectdropdown("1",titleDDL);
		driver.findElement(pages.registerPage.firstname).sendKeys(config.register.firstname);
		driver.findElement(pages.registerPage.surname).sendKeys(config.register.surname);
		driver.findElement(pages.registerPage.telephone).sendKeys(config.register.telephone);
		driver.findElement(pages.registerPage.emailId).sendKeys(config.register.emailId);
		driver.findElement(pages.registerPage.jobtitle).sendKeys(config.register.jobtitle);
		WebElement role = driver.findElement(pages.registerPage.jobfunction);
		selectdropdown("9",role);
	 
	}

	@Then("^user registers successfully$")
	public void user_registers_successfully() throws Throwable {
		driver.findElement(pages.registerPage.registerBtn).click();
		Assert.assertEquals("RS Components | Electronic and Electrical Components", driver.getTitle());
		System.out.println("User Registered and LoggedIn successfully");
		driver.findElement(pages.loginHomePage.logout).click();
		System.out.println("User successfully loggedout");
		driver.close();
	}

	public static void selectdropdown(String value, WebElement element)
	{
		Select sel = new Select(element);
		sel.selectByValue(value);
	}	


}
