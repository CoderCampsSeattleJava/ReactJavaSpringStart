package com.ReactJavaMySQL.CoderDudes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Courses {
	
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

	
}


