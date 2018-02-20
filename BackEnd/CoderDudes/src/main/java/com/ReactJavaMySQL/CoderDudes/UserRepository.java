package com.ReactJavaMySQL.CoderDudes;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

	User findById(long l);

}
