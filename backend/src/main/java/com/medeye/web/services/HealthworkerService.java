package com.medeye.web.services;

import com.medeye.web.entities.Healthworker;
import com.medeye.web.repositories.HealthworkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class HealthworkerService {
    @Autowired
    private HealthworkerRepository healthworkerRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public HealthworkerService(BCryptPasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public Healthworker findByUsername(String username) {
        return healthworkerRepository.findByUsername(username).orElse(null);
    }
    public void save(Healthworker healthworker) {
        healthworker.setPassword(passwordEncoder.encode(healthworker.getPassword()));
        healthworkerRepository.save(healthworker);
    }

    public boolean validatePassword(String rawPassword, String hashedPassword) {
        return passwordEncoder.matches(rawPassword, hashedPassword);
    }
}
