package net.codejava.aws;
import java.io.IOException;
import java.util.regex.Pattern;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.ui.Model;

@Controller
public class Maincontroller {
	
	@GetMapping("")
	public String showHomePage() {
		return "form";
	}
	
	@PostMapping("/upload")
	public String uploadFile(String name, String email, @RequestParam("image") MultipartFile multipart, Model output) throws IOException{
		String fileName = multipart.getOriginalFilename();
		String pattern = "[<>#%{}\s]";
		fileName = fileName.replaceAll(pattern, "");
		System.out.println("name: " + name);
		System.out.println("email: " + email);
		System.out.println("filename: " + fileName);
		String message = "";
		String response;
		
		try {
		S3Util.uploadFile(fileName, multipart.getInputStream());
		message = "Operation Succeded";
		} catch(Exception ex){
			message = ex.getMessage();
		}
		
		
		String object_url = "https://ayoub123f.s3.eu-west-3.amazonaws.com/images/" + fileName ;
		System.out.println(object_url);
	    PostReq reqobj = new PostReq();
	    response = reqobj.send(object_url);
		System.out.println(message);
		try {
		   output.addAttribute("name", fileName);
		   output.addAttribute("response", response);
		   output.addAttribute("url", object_url);
		}
		catch(Exception ex){
			System.out.println("method doesn't exist");
		}
		
		return "output";
		
	}

}
