//package com.ReactJavaMySQL.Startup;
//import java.awt.print.Book;
//
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@Controller
//@RequestMapping(path="url")
//
//public class AddController extends MainController {
//	
//	
//	private EntityManager em;
//		
//	public User find(Long id) {	
//		return em.find(User.class, id);
//	}
//	
//	public User create(User user) {
//		em.persist(user);
//		return user;
//		
//	}
//	
//	public void delete (Long id) {
//		em.remove(em.getReference(User.class, id));
//		
//	}
//}
