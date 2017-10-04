package utility;

import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import configurations.config;

public class mydriver {
	
	public static WebDriver driver=null;
	
	@BeforeClass
	public static void selectbrowser()
	{
		
	if(config.browser.brower.equalsIgnoreCase("chrome")){
		System.setProperty("webdriver.chrome.driver", "C:\\Automation\\workspace\\RS_Automation_Project\\Library\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	else if(config.browser.brower.equalsIgnoreCase("IE")){
		System.setProperty("webdriver.ie.driver", "C:\\Automation\\workspace\\RS_Automation_Project\\Library\\IEDriverServer_Win32_3.5.1\\IEDriverServer.exe");
		driver = new InternetExplorerDriver();
	}
	
	else if(config.browser.brower.equalsIgnoreCase("firefox")){
		System.setProperty("webdriver.gecko.driver","C://Automation//workspace//Library//geckodriver-v0.19.0-win64//geckodriver.exe");
		driver = new FirefoxDriver();
	}
	
	
	
}
	
	public static boolean isAlertPresent(){
		
		try
		{
			Alert alert = driver.switchTo().alert();
			alert.accept();
			return true;
		}
		catch (NoAlertPresentException e){
			return false;
		}
	}
	
	@AfterClass
	public static void closebrowser(){
		driver.quit();
	}
	
	
}
