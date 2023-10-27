package com.medeye.web.controllers;

import com.medeye.web.entities.Healthworker;
import com.medeye.web.services.HealthworkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private HealthworkerService healthworkerService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody Healthworker loginRequest) {
        Healthworker user = healthworkerService.findByUsername(loginRequest.getUsername());
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Authenticated");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Healthworker signupRequest) {

        if (healthworkerService.findByUsername(signupRequest.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username is already taken");
        }

        Healthworker user = new Healthworker();
        user.setUsername(signupRequest.getUsername());
        user.setPassword(signupRequest.getPassword());
        // Set other fields like name, email etc

        healthworkerService.save(user);

        return ResponseEntity.ok("User registered successfully");
    }
}

