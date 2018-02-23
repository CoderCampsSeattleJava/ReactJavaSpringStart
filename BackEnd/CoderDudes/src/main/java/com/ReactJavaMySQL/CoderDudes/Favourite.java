package com.ReactJavaMySQL.CoderDudes;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Data;

import javax.persistence.JoinColumn;


@Entity(name = "Favourites")
@Table(name = "favourites")
//@Access(value=AccessType.FIELD)

public class Favourite implements FavouritesRepository, Serializable{
	
	
	/**
	 * 
	 */
		
	private static final long serialVersionUID = 6412586796844594649L;
	
	@Id 
	@GeneratedValue
	private long id;
		
	@ManyToMany(cascade = { 
	        CascadeType.PERSIST, 
	        CascadeType.MERGE
	})
	
	@JoinTable(
			name="FAV_COURSES",
			joinColumns=@JoinColumn(name="USER_ID", referencedColumnName="ID"),
			inverseJoinColumns=@JoinColumn(name="FAV_USER_COURSE", referencedColumnName="COURSE_ID")
			)
		
	private List<Favourite> favs;
	
	
	
	@Column (name="id", insertable=false, updatable=false)
	private long _id;
	
	public long get_Id() {return _id;}
	public void set_Id(long id) {_id = id;}
	
	
	@Column (name="course_id", insertable=false, updatable=false)
	private long _course_id;
	
	public long get_Course_id() {return _course_id;}	
	public void set_Course_id(long id) {_course_id = id;}
	

	
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
	

}


