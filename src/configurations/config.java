package configurations;

import java.util.Random;

public class config {
	
	public static class url{
		public static String url = "https://uk.rs-online.com/web";
	}
	
	public static class browser{
		public static String brower = "chrome";
	}
	
	public static class register{
		
		public static String username = sname("munesh");
		public static String password = "12345678";
		public static String retypepassword = "12345678";
		public static String firstname = "mike";
		public static String surname = "henry";
		public static String telephone = "1234567890";
		public static String emailId= sname("mikehenry")+"@gmail.com";
		public static String jobtitle = "tester";
		
	}
	
	public static class search{
		
		public static String searchkeyword = "Batteries";
	}
	
	public static String  sname(String fname){
		Random rand = new Random();
		int  n = rand.nextInt(250) + 1;
		String newfname = fname+n;
		return newfname;
	}

}
