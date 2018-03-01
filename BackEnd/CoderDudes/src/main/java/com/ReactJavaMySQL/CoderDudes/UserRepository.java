package com.ReactJavaMySQL.CoderDudes;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {

	public User findOneByUsername(String username);
	User findById(long user_id);

	static Object findAll(String string) {
		// TODO Auto-generated method stub
		return null;
	}


}
