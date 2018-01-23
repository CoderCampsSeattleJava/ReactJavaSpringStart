package com.ReactJavaMySQL.Startup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ReactJavaMySQL.Startup.User;
import com.ReactJavaMySQL.Startup.UserRepository;

@Controller
@RequestMapping(path="/demo")
public class MainController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(path="/add")
	public @ResponseBody String addNewUser (@RequestParam String firstName, String lastName) {
		
		User n = new User();
		n.setFirstName(firstName);
		n.setLastName(lastName);
		userRepository.save(n);
		return "saved";
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}
}
