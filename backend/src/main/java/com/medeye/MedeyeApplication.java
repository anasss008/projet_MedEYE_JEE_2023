package com.medeye;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
@ComponentScan({"com.medeye.web", "com.medeye.s3upload"})
public class MedeyeApplication {

    public static void main(String[] args) {
        SpringApplication.run(MedeyeApplication.class, args);
    }

}