package com.ReactJavaMySQL.CoderDudes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping(path="/api2")
public class AddController {
	

	@Autowired
	private CourseRepository courseRepository;
	
	@PostMapping(path="/favcourses")
	public @ResponseBody String postCourses (@RequestParam  String course_name, @RequestParam String course_id) {
		
		Courses n = new Courses();
		n.setCourse_name(course_name);
		n.setCourse_id(course_id);
		courseRepository.save(n);
		return "Saved in FAV 'POST'";
	}
				
	@GetMapping(path="/courses")
	public @ResponseBody Courses getCourses(@RequestParam long id) {
		
		return courseRepository.findOne(id);
	}
	
	@GetMapping(path="/allcourses")
	public @ResponseBody Iterable<Courses> getAllCourses() {
		return courseRepository.findAll();
	}
	
//	@DeleteMapping("/deletecourse/{id}")
//	public void deleteCourse(@PathVariable long id) {
//		Courses courses = session.deleteById(id);
//	}
	
	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}
		
}