package com.medeye.test.repositories;

import com.medeye.test.entities.Healthworker;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface HealthworkerRepository  extends JpaRepository<Healthworker,Long> {
    Optional<Healthworker> findByUsername(String username);
}