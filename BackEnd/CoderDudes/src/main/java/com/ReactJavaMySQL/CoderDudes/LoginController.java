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
		public User login(@RequestBody User userDetails) {
			
			User foundUser = userRepository.findOneByUsername(userDetails.getUsername());
			System.out.println(foundUser.getPassword().equals(userDetails.getPassword()));
			if(foundUser != null && foundUser.getPassword().equals(userDetails.getPassword())) {
				foundUser.setPassword(null);
				foundUser.setPassword_Conf(null);
				return foundUser;
			} else {
				return null;
			}
		}
		
}
