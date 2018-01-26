package com.ReactJavaMySQL.Startup;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.Data;


@Data
@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String name;
	private String email;
	
	public User() {
		this.id = -1;
		this.name = "";
		this.email = "";
	}
	
	public User(long id, String name, String email) {
		this.id = id;
		this.name = name;
		this.email = email;
	}
	
	public long getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
