package com.ReactJavaMySQL.CoderDudes;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import lombok.Data;

@Data
@Entity
public class Courses {
	//private List<User> users;	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String course_name;
	private String course_id;
	
	public Courses() {
		this.id = -1;
		this.course_name = "";
		this.course_id = "";
		}
	
	public Courses(long id, String course_name, String course_id) {
		this.id = id;
		this.course_name = course_name;
		this.course_id = course_id;
	}
	
	 @Column(name="COURSE_ID")
	    public String getCourseId() {
	        return course_id;
	    }
	 
	 @ManyToMany(cascade = CascadeType.ALL)
//	 @Transient
	 @JoinTable(name = "favourite", joinColumns = @JoinColumn(name = "course_id"),
	 inverseJoinColumns = @JoinColumn(name = "user_id"))
	 
	private List<User> users = new ArrayList<>();
	
	public List<User> getUsers() {
		return users;
	}
	
	public void addUser(User newUser) {
		users.add(newUser);
	}
	
	public long getId() {
		return id;
	}

	public String getCourse_name() {
		return course_name;
	}

	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}

	public String getCourse_id() {
		return course_id;
	}

	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	
		 @SuppressWarnings({ "unchecked", "null" })
	public void addTag(User user) {
	       List<User> users = null;
		users.add(user);
	        user.getUsers().addAll((Collection<? extends User>) this);
	    }
	 
	  
}


