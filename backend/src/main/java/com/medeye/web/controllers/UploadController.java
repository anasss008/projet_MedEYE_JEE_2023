package com.medeye.web.controllers;
import java.io.IOException;

import com.medeye.web.util.S3Util;
import com.medeye.web.entities.Patient;
import com.medeye.web.repositories.PatientRepository;
import com.medeye.web.services.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class UploadController {
	@Autowired
	private PatientRepository patientRepository;

	@GetMapping("")
	public String showHomePage() {
		return "form";
	}

	@PostMapping("/upload")
	public ResponseEntity<String> uploadFile(@RequestParam("image") MultipartFile multipart) throws IOException {

		String fileName = multipart.getOriginalFilename();
		fileName = S3Util.renameFile(fileName);
		String fileUrl = "";

		try {
			S3Util.uploadFile(fileName, multipart.getInputStream());
			fileUrl = S3Util.waitFileUrl(fileName);
		} catch (Exception ex) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed");
		}

		// Working with model API

		try {
			String response = UploadService.send(fileUrl);
			System.out.println(response);
			// Put the image URL into the JSON Response
			return UploadService.modifyJson(response, fileUrl);
		} catch (Exception ex) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
		}

	}

	@PostMapping("/savetest")
	public ResponseEntity<String> saveTest(@RequestBody Patient patient) {

		try {
			// Save to DB
			patientRepository.save(patient);
			return ResponseEntity.ok("Patient saved successfully");

		} catch (Exception ex) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving patient");
		}

	}
}
