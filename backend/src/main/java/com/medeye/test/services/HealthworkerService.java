package com.medeye.test.services;

import com.medeye.test.entities.Healthworker;
import com.medeye.test.repositories.HealthworkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HealthworkerService {
    @Autowired
    private HealthworkerRepository healthworkerRepository;

    public Healthworker findByUsername(String username) {
        return healthworkerRepository.findByUsername(username).orElse(null);
    }
    public void save(Healthworker healthworker) {
        healthworkerRepository.save(healthworker);
    }
}
