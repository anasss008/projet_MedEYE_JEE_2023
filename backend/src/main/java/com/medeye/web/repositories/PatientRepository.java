package com.medeye.web.repositories;

import com.medeye.web.entities.Healthworker;
import com.medeye.web.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface PatientRepository extends JpaRepository<Patient,Long> {
    Optional<Patient> findByUsername(String username);


}