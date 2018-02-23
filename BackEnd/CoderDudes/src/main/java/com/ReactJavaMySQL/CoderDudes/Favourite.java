package com.ReactJavaMySQL.CoderDudes;

import java.io.Serializable;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "Favourites")
@Access(value=AccessType.FIELD)
public class Favourite implements FavouritesRepository, Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@Column (name="username", insertable = false, updatable = false)
	private long _username;
	
	@Transient
	public long get_Username() {return _username;}
	public void set_Username(long id) {_username = id;}
	
	@Id
	@Column (name="course_id", insertable = false, updatable = false)
	private long _course_id;
	
	@Transient
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


