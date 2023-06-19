package com.ProFIesta.repository;

import com.ProFIesta.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    // Additional custom query methods can be defined here
    User findByUsername(String Username);
    

}
