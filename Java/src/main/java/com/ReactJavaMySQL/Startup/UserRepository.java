package com.ReactJavaMySQL.Startup;

import org.springframework.data.repository.CrudRepository;
import com.ReactJavaMySQL.Startup.User;

public interface UserRepository extends CrudRepository<User, Long> {

	User findById(long l);

}
