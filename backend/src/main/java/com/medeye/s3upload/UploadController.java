package com.medeye.s3upload;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.ui.Model;

@Controller
public class UploadController {

	@GetMapping("")
	public String showHomePage() {
		return "form";
	}

	@PostMapping("/upload")
	public ResponseEntity<String> uploadFile(String first_name,
													String last_name,
													String address,
													String email,
													@RequestParam("image") MultipartFile multipart) throws IOException{

		String fileName = multipart.getOriginalFilename();
		fileName = S3Util.renameFile(fileName);
		String fileUrl= "";

		try {
			S3Util.uploadFile(fileName, multipart.getInputStream());
			fileUrl = S3Util.waitFileUrl(fileName);

		} catch(Exception ex){

			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed");
		}

		// working with model api

		try {
			String response = PostReq.send(fileUrl);
            return ResponseEntity.ok().body(response);
		}

		catch(Exception ex){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
		}

	}

}
