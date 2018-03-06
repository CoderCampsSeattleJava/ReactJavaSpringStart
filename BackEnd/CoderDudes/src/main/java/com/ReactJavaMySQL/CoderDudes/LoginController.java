package com.ReactJavaMySQL.CoderDudes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

		@Autowired
		UserRepository userRepository;
		
		@PostMapping("/login")
		public User login(@RequestBody User userDetails) {
			if (userDetails != null) {
				User foundUser = userRepository.findOneByUsername(userDetails.getUsername());
				System.out.println(foundUser.getPassword().equals(userDetails.getPassword()));
				if(foundUser != null && foundUser.getPassword().equals(userDetails.getPassword())) {
					foundUser.setPassword(null);
					foundUser.setPassword_Conf(null);
					return foundUser;
				}
			}
			return null;
		}
		
}
