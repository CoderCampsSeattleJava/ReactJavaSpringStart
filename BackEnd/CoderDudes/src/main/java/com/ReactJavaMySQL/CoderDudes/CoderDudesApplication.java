package com.ReactJavaMySQL.CoderDudes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories


public class CoderDudesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoderDudesApplication.class, args);
	}
}
