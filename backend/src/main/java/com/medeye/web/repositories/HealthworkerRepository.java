package com.medeye.web.repositories;

import com.medeye.web.entities.Healthworker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface HealthworkerRepository  extends JpaRepository<Healthworker,Long> {
    Optional<Healthworker> findByUsername(String username);
}