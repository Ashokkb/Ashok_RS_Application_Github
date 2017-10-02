package cucumber_Runnerclass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features="features/SearchPurchaseProduct.feature", glue={"regressionPack"},
plugin= {"pretty:target/cucumber-pretty.txt", "junit:target/cucumber-results.xml"}
		)

public class RunnerClass {

}
