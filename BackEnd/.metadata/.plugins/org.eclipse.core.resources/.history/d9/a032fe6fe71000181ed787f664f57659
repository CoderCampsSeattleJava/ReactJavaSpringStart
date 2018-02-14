package Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import Models.User;
import Repositories.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping(path="/api")
public class MainController {
	

	@Autowired
	private UserRepository userRepository;
	
	@PostMapping(path="/post")
	public @ResponseBody String postNewUser (@RequestParam  String first_name, @RequestParam String last_name, @RequestParam String email, @RequestParam String home_state, 
			@RequestParam String username, @RequestParam String password, @RequestParam String password_conf) {
		
		User n = new User();
		n.setFirst_Name(first_name);
		n.setLast_Name(last_name);
		n.setHome_State(home_state);
		n.setEmail(email);
		n.setUsername(username);
		n.setPassword(password);
		n.setPassword_Conf(password_conf);
		this.userRepository.save(n);
		return "Saved in DB 'POST'";
	}
	
	
	@GetMapping(path="/add")
	public @ResponseBody String addNewUser (@RequestParam  String first_name, @RequestParam String last_name, @RequestParam String email, @RequestParam String home_state, 
			@RequestParam String username, @RequestParam String password, @RequestParam String password_conf) {
		
		User n = new User();
		n.setFirst_Name(first_name);
		n.setLast_Name(last_name);
		n.setHome_State(home_state);
		n.setEmail(email);
		n.setUsername(username);
		n.setPassword(password);
		n.setPassword_Conf(password_conf);
		userRepository.save(n);
		return "saved 'GET'";
	}
	
	
	@GetMapping(path="/users")
	public @ResponseBody User getUser(@RequestParam long id) {
		
		return userRepository.findOne(id);
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	
	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}
	
}