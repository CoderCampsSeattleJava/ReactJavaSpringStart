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
	private String first_name;
	private String last_name;
	private String home_state;
	private String email;
	private String username;
	private String password;
	private String password_conf;
	
	public User() {
		this.id = -1;
		this.first_name = "";
		this.last_name = "";
		this.home_state = "";
		this.email = "";
		this.username = "";
		this.password = "";
		this.password_conf = "";
	}
	
	public User(long id, String first_name, String last_name, String email, String home_state, String username, String password, String password_conf) {
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.home_state = home_state;
		this.email = email;
		this.username = username;
		this.password = password;
		this.password_conf = password_conf;
	}
	
	public long getId() {
		return id;
	}

	public String getFirst_Name() {
		return first_name;
	}

	public void setFirst_Name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_Name() {
		return last_name;
	}

	public void setLast_Name(String last_name) {
		this.last_name = last_name;
	}

	public String getHome_State() {
		return home_state;
	}

	public void setHome_State(String home_state) {
		this.home_state = home_state;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword_Conf() {
		return password_conf;
	}

	public void setPassword_Conf(String password_conf) {
		this.password_conf = password_conf;
	}

	
}
