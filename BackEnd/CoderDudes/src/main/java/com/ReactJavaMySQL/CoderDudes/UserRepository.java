package com.ReactJavaMySQL.CoderDudes;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

	public User findOneByUsername(String username);
	User findById(long user_id);

	static Object findAll(String string) {
		// TODO Auto-generated method stub
		return null;
	}


}
