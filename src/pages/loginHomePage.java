package pages;

import org.openqa.selenium.By;

public class loginHomePage {
		
	public static By logout = By.partialLinkText("Log Out");
	public static By searchbar = By.id("searchTerm");
	public static By buttonSearch = By.id("btnSearch");
	public static By LHNsearch = By.xpath("//div[@class='rsGARealEstate']/a[text()='Rechargeable Batteries']");
	public static By alertmsg = By.id("acsMainInvite");
	public static By LHNsubsearch = By.xpath("//div[@class='rsGARealEstate']/a[text()='AA Rechargeable Batteries']");
	public static By battery = By.xpath("//a[text()='Duracell Recharge Ultra Precharged NiMH Rechargeable AA Batteries, 2400mAh']");
	public static By addtoBasket = By.id("addToCartForm_36460692:addToOrder");
	public static By basket = By.xpath("//a[@alt='View Basket']");
	public static By remove = By.partialLinkText("Remove");
	public static By feedbackpopup = By.id("acsMainInvite");
	public static By feedbacknothanks = By.partialLinkText("No, thanks");
	public static By confirmremovepopup = By.id("confirmDeleteContinue");
	public static By AllProducts = By.partialLinkText("All Products");
	public static By Connectors = By.xpath("//a[text()= 'Batteries']");
}
