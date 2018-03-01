package com.ReactJavaMySQL.CoderDudes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

		@Autowired
		UserRepository userRepository;
		
		@PostMapping("/login")
		public void login(@RequestBody User userDetails) {
			
			User foundUser = userRepository.findOne(userDetails.getUsername());
			if(foundUser == null) {
				userRepository.save(userDetails);
			}
		}
		
}
