package com.ReactJavaMySQL.CoderDudes;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Data;

import javax.persistence.JoinColumn;

@Data
@Entity
//(name = "favourites")
//@Table(name = "favourites")
//@Access(value=AccessType.FIELD)

public class Favourite implements FavouritesRepository, Serializable{
	
	
	/**
	 * 
	 */
		
	private static final long serialVersionUID = 6412586796844594649L;
	
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	
	@ManyToMany(cascade = { 
	        CascadeType.ALL
	})
	
	@JoinTable(
			joinColumns=@JoinColumn(name="USER_ID"),
			inverseJoinColumns=@JoinColumn(name="COURSE_ID")
			)
		
	private List<Favourite> favs = new ArrayList<>();
	
	
	
//	@Column (name="user_id", insertable=false, updatable=false)
	private long user_id = -1;
	
	public long getUser_Id() {return user_id;}
	public void set_Id(long user_id) {this.user_id = user_id;}
	
//	
//	@Column (name="course_id", insertable=false, updatable=false)
	private String course_id = "";
	
	public String get_Course_id() {return course_id;}	
	public void set_Course_id(String course_id) {this.course_id = course_id;}
	

	
	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public void delete(Long arg0) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void delete(Favourite arg0) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void delete(Iterable<? extends Favourite> arg0) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}
	@Override
	public boolean exists(Long arg0) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public Iterable<Favourite> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Iterable<Favourite> findAll(Iterable<Long> arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Favourite findOne(Long arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public <S extends Favourite> S save(S arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public <S extends Favourite> Iterable<S> save(Iterable<S> arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	public void setUserId(long course_id2) {
		// TODO Auto-generated method stub
		
	}
	public void setCourseId(String course_id2) {
		// TODO Auto-generated method stub
		
	}
	

}


