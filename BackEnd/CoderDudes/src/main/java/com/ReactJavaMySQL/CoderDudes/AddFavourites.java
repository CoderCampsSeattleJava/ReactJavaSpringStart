package com.ReactJavaMySQL.CoderDudes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping(path = "/api3")
public class AddFavourites {

	@Autowired
	private FavouritesRepository favouritesRepository;

	@PostMapping(path="/favourites")
	public @ResponseBody <S> String postFavs (@RequestParam long user_id, @RequestParam String course_id) {
		
		Favourite n = new Favourite();
		n.setUserId(user_id);
		n.setCourseId(course_id);
		favouritesRepository.save(n);
		return "Saved in FAVOURITES";
	}
	
	@GetMapping(path="/favourites")
	public @ResponseBody Favourite getFavourites(@RequestParam long user_id) {
		
		return favouritesRepository.findOne(user_id);
	}
	
	@GetMapping(path="/allfavs")
	public @ResponseBody Iterable<Favourite> getAllFavourites() {
		return favouritesRepository.findAll();
	}
	
	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

}
