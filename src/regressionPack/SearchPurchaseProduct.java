package regressionPack;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import configurations.config;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchPurchaseProduct extends utility.mydriver {

	@When("^enter a product details in search$")
	public void enter_a_product_details_in_search() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.findElement(pages.loginHomePage.searchbar).click();
		driver.findElement(pages.loginHomePage.searchbar).sendKeys(config.search.searchkeyword);
		driver.findElement(pages.loginHomePage.buttonSearch).isDisplayed();
		driver.findElement(pages.loginHomePage.buttonSearch).sendKeys(Keys.ENTER);		
	}

	@Then("^search product details page displayed$")
	public void search_product_details_page_displayed() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		 ( ( JavascriptExecutor ) driver )
         .executeScript( "window.onbeforeunload = function(e){};" );
				
	   driver.findElement(pages.loginHomePage.LHNsearch).sendKeys(Keys.ENTER);
	   driver.findElement(pages.loginHomePage.LHNsubsearch).click();
	   driver.findElement(pages.loginHomePage.battery).click();
	   
	}
	
	@Then("^purchase the product$")
	public void purchase_the_product() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	   	driver.findElement(pages.loginHomePage.addtoBasket).click();
		driver.findElement(pages.loginHomePage.basket).click();
		driver.findElement(pages.loginHomePage.remove).click();
		driver.findElement(pages.loginHomePage.confirmremovepopup).isDisplayed();
		driver.findElement(pages.loginHomePage.confirmremovepopup).click();
		
		 ( ( JavascriptExecutor ) driver )
         .executeScript( "window.onbeforeunload = function(e){};" );
		Thread.sleep(5000);
		driver.findElement(pages.loginHomePage.logout).click();
		driver.close();
	}

}
