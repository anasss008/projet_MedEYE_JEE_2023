package com.medeye.web.services;

import com.medeye.web.entities.Doctor;
import com.medeye.web.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public Doctor getDoctorById(Long id) {
        return doctorRepository.findById(id).orElse(null);
    }

    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }

    public List<Doctor> getDoctorsByVille(String ville) {

        List<Doctor> doctors = doctorRepository.findByVille(ville);

        if(doctors == null || doctors.isEmpty()) {
            return Collections.emptyList();
        }

        return doctors;

    }
}